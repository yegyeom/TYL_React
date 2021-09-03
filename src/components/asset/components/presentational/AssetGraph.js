// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import React, { useEffect, useState } from 'react';
import { ResponsiveLine } from '@nivo/line';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const AssetGraph = ({ data }) => {
  const [selectedButton, setSelectButton] = useState('1-week');
  const [graphData, setGraphData] = useState([]);
  const [inProgress, setInProgress] = useState('1-week');

  const clickButton = event => {
    setSelectButton(event.target.id);
    setInProgress(event.target.id);
  };

  useEffect(() => {
    if (inProgress) {
      data.map(list => {
        var arr = [];
        if (list.title === inProgress) {
          arr.push(list);
          setGraphData(arr);
        }
        //console.log(arr);
      });
    }
  }, [inProgress]);

  return (
    <div className="graph-container">
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
          yScale={{ type: 'linear', min: 500000, max: 1500000, stacked: true, reverse: false }}
          yFormat={value => `${Number(value).toLocaleString('ko-KR')}`}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            //legend: 'transportation',
            // legendOffset: 36,
            // legendPosition: 'middle',
          }}
          axisLeft={false}
          // axisLeft={{
          //   orient: 'left',
          //   tickSize: 0,
          //   tickPadding: 15,
          //   tickRotation: 0,
          //   legend: '',
          //   legendOffset: -40,
          //   legendPosition: 'middle',
          // }}
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
        <hr width="480px" color="#c4c4c4" noshade="true" />
        <div className="graph-buttons">
          <button
            id="1-week"
            className={'1-week' === selectedButton ? 'selected-button' : 'graph-button'}
            onClick={clickButton}
          >
            1주일
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
          <button
            id="6-month"
            className={'6-month' === selectedButton ? 'selected-button' : 'graph-button'}
            onClick={clickButton}
          >
            6개월
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssetGraph;
