import React, { useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import '../../../styles/sass/main.css';

const Ticker = ({ info, str }) => {
  const [index, setIndex] = useState(0);
  let sign = '';
  if (str == 'best') {
    sign = '+';
  } else {
  }

  useEffect(() => setInterval(() => setIndex(state => (state + 1) % info.length), 3000), []);

  const Transitions = useTransition(index, {
    from: { opacity: 0 }, // unvisible
    enter: { opacity: 1 }, //visible
    //leave: { opacity: 0, },
  });

  const tickerItems = info.map((item, idx) => ({ style }) => {
    return (
      <>
        <animated.div className={str + '-ticker-text-name'} style={{ ...style }}>
          {item.nickname}
        </animated.div>
        <animated.div className={str + '-ticker-text-profit'} style={{ ...style }}>
          {sign}
          {item.profit}%
        </animated.div>
      </>
    );
  });

  return (
    <>
      <div className="tickerbox-container">
        <div className="ticker-wrapper">
          {Transitions(({ opacity }, item) => {
            const TickerItem = tickerItems[item];
            return (
              <TickerItem
                style={{
                  opacity: opacity,
                  transform: opacity,
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Ticker;
