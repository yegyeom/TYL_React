// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import React, { useEffect, useState } from 'react';
import { ResponsiveLine } from '@nivo/line';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const AssetGraph = ({ isPc, data }) => {
  const [selectedButton, setSelectButton] = useState('total');
  const [graphData, setGraphData] = useState([]);
  const [minY, setMinY] = useState(0);
  const [maxY, setMaxY] = useState(0);
  const [inProgress, setInProgress] = useState();

  const clickButton = event => {
    setSelectButton(event.target.id);
    setInProgress(event.target.id);
  };

  useEffect(() => {
    setSelectButton('total');
    setInProgress('total');
  }, []);

  useEffect(() => {
    if (inProgress) {
      data.map(list => {
        var arr = [];
        if (list.title === inProgress) {
          arr.push(list);
          setGraphData(arr);
          console.log(list.data.length);

          var min = list.data[0].y;
          var max = list.data[0].y;
          for (var i = 0; i < list.data.length; i++) {
            if (list.data[i].y < min) min = list.data[i].y;
            if (list.data[i].y > max) max = list.data[i].y;
          }

          setMinY(min);
          setMaxY(max);
        }
      });
    }
  }, [inProgress]);

  return (
    <div className="graph-container" id={isPc ? null : 'm'}>
      <div
        style={{
          height: '245px',
          width: '100%',
        }}
      >
        <ResponsiveLine
          colors={['#5673EB']}
          colorBy="index"
          data={graphData}
          margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: minY * 0.7,
            max: maxY * 1.7,
            stacked: true,
            reverse: false,
          }}
          yFormat={value => `${Number(value).toLocaleString('ko-KR')}`}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
          }}
          axisLeft={false}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          enableGridX={false}
          enableGridY={false}
          enableCrosshair={false}
          enableSlices={'x'}
        />
        <hr width="95%" color="#c4c4c4" noshade="true" />
        <div className="graph-buttons">
          <button
            id="total"
            className={'total' === selectedButton ? 'selected-button' : 'graph-button'}
            onClick={clickButton}
          >
            전체
          </button>
          <button
            id="1-month"
            className={'1-month' === selectedButton ? 'selected-button' : 'graph-button'}
            onClick={clickButton}
          >
            1개월
          </button>
          <button
            id="3-month"
            className={'3-month' === selectedButton ? 'selected-button' : 'graph-button'}
            onClick={clickButton}
          >
            3개월
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssetGraph;
