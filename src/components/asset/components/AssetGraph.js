// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import React from 'react';
import { ResponsiveLine } from '@nivo/line';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const AssetGraph = () => {
  const data = [
    {
      id: 'TYL',
      data: [
        {
          x: '20.3',
          y: 1000000,
        },
        {
          x: '20.4',
          y: 150000,
        },
        {
          x: '20.5',
          y: 27000,
        },
        {
          x: '20.6',
          y: 14100000,
        },
        {
          x: '20.7',
          y: 54600,
        },
        {
          x: '20.8',
          y: 160,
        },
      ],
    },
  ];

  return (
    <div className="graph-container">
      <div
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        <ResponsiveLine
          colors={['#5673EB']}
          colorBy="index"
          data={data}
          margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
          //yFormat=" >-f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            //legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
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
      </div>
    </div>
  );
};

export default AssetGraph;
