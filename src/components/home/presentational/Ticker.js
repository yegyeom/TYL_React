import React, { useEffect, useState } from 'react';
import { useTransition, animated } from 'react-spring';
import '../../../styles/sass/main.css';

function Ticker({ info, str }) {
  const [index, setIndex] = useState(0);

  useEffect(() => setInterval(() => setIndex(state => (state + 1) % info.length), 3000), []);

  const Transitions = useTransition(index, {
    from: { opacity: 0 }, // unvisible
    enter: { opacity: 1 }, //visible
    //leave: { opacity: 0, },
  });

  const tickerItems = info.map(item => ({ style }) => {
    return (
      <>
        <animated.div className={str + '-ticker-text-name'} style={{ ...style }}>
          {item.nk_name}
        </animated.div>
        <animated.div className={str + '-ticker-text-profit'} style={{ ...style }}>
          {item.profit}
        </animated.div>
      </>
    );
  });

  return (
    <>
      <div className="flexContainer">
        <div className="tickerWrapper">
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
}

export default Ticker;
