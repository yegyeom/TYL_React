import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import ChartStorage from './ChartStorage.js';
import axios from 'axios';

// https://apexcharts.com/docs/chart-types/candlestick/ 참고
// 툴팁 : 마우스 포인터라 불리는 커서와 함께 동작한다.
// 사용자가 커서에 항목을 클릭하지 않고 가리키면 조그마한 상자가 항목 위에 나타나서 보충 설명을 보여 준다.
const Chart = props => {
  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const [series, setSeries] = useState([{}]);
  const [selectedItem, setSelectedItem] = useState();
  const [additionalData, setAdditionalData] = useState();
  const [tooltipIndex, setTooltipIndex] = useState(0);
  const [tooltipData, setTooltipData] = useState({
    open: '',
    high: '',
    low: '',
    close: '',
    date: '',
  });

  let newArr = { open: '', high: '', low: '', close: '', date: '' };

  additionalData;

  useEffect(() => {
    setSelectedItem(props.sendItem);
  }, [props]);

  useEffect(() => {
    if (selectedItem != null) {
      setOptions({
        ...options,
        title: { text: selectedItem.name },
      });

      let url = 'stock/history-data?code=' + String(selectedItem.code);
      axios.get(url).then(res => {
        console.log('뭐냐 ===> ', res.data.history);

        if (res.data.history.length != 0) {
          setTooltipData({
            open: res.data.history[res.data.history.length - 1].startValue,
            high: res.data.history[res.data.history.length - 1].highValue,
            low: res.data.history[res.data.history.length - 1].lowValue,
            close: res.data.history[res.data.history.length - 1].endValue,
            date: res.data.history[res.data.history.length - 1].date,
          });

          setAdditionalData(
            res.data.history.map((res_data, index) => {
              let className = 'chartInfo-data';
              if (res_data.rate > 0) {
                className = 'chartInfo-increased';
              } else if (res_data.rate < 0) {
                className = 'chartInfo-decreased';
              }

              return {
                tradeAmount: res_data.tradeAmount,
                rate: res_data.rate,
                className: className,
              };
            }),
          );

          setTooltipIndex(res.data.history.length - 1);

          setSeries([
            {
              data: res.data.history.map((res_data, index) => {
                return {
                  x: res_data.date,
                  y: [
                    res_data.startValue,
                    res_data.highValue,
                    res_data.lowValue,
                    res_data.endValue,
                  ],
                };
              }),
            },
          ]);
        } else {
          setSeries([{}]);
          setAdditionalData();
          setTooltipIndex(0);
          setTooltipData({
            open: '',
            high: '',
            low: '',
            close: '',
            date: '',
          });
        }
      });
    }
  }, [selectedItem]);

  const [options, setOptions] = React.useState({
    title: {
      text: '',
      style: {
        fontSize: '18px',
        fontWeight: 'bolder',
        color: '#263238',
      },
    },

    chart: {
      toolbar: {
        tools: {
          download: false,
          selection: false,
          zoom: false,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: false,
          customIcons: [],
        },
        autoSelected: 'pan',
      },
      sparkline: {
        enabled: true,
      },
    },

    xaxis: {
      type: 'category',

      labels: {
        show: false,
        format: 'MM yyyy',
      },

      axisBorder: {
        show: false,
        color: '#FF0000',
      },

      tooltip: {
        enabled: false,
      },
    },

    yaxis: {
      legend: {
        title: 'dan',
      },
      labels: {
        show: false,
      },
    },

    // 툴팁 옵션
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const o = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
        const h = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
        const l = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
        const c = w.globals.seriesCandleC[seriesIndex][dataPointIndex];
        const d = w.globals.categoryLabels[dataPointIndex];
        newArr = { open: o, high: h, low: l, close: c, date: d };

        setTooltipIndex(dataPointIndex);
        setTooltipData({ open: o, high: h, low: l, close: c, date: d });
        return '<div><div>';
      },
    },

    // 색깔 옵션
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#EB5374',
          downward: '#5673EB',
        },
        wick: {
          useFillColor: true,
        },
      },
    },
  });

  const getFormatDate = d => {
    var date = new Date(d);
    var year = date.getFullYear(); //yyyy
    var month = 1 + date.getMonth(); //M
    month = month >= 10 ? month : '0' + month; // month 두자리로 저장
    var day = date.getDate(); //d
    day = day >= 10 ? day : '0' + day; //day 두자리로 저장
    return year + '.' + month + '.' + day;
  };

  return (
    <div className="chart-container">
      <ReactApexChart options={options} series={series} type="candlestick" height={320} />

      <div id="chartInfo-div">
        <div className="chartInfo-date">{getFormatDate(tooltipData.date)}</div>

        <div className="chartInfo">
          <div className="chartInfo-container">
            <div className="chartInfo-text">시작</div>
            <div className="chartInfo-data">{tooltipData.open}</div>
          </div>
          <div className="chartInfo-container">
            {' '}
            <div className="chartInfo-text">마지막</div>
            <div className="chartInfo-data">{tooltipData.high}</div>
          </div>
        </div>

        <div className="chartInfo">
          <div className="chartInfo-container">
            {' '}
            <div className="chartInfo-text">최고</div>
            <div className="chartInfo-data">{tooltipData.low}</div>
          </div>
          <div className="chartInfo-container">
            {' '}
            <div className="chartInfo-text">최저</div>
            <div className="chartInfo-data">{tooltipData.close}</div>
          </div>
        </div>

        <div className="chartInfo">
          <div className="chartInfo-container">
            {' '}
            <div className="chartInfo-text">거래량</div>
            <div className="chartInfo-data">
              {additionalData != null ? additionalData[tooltipIndex].tradeAmount : null}
            </div>
          </div>
          <div className="chartInfo-container">
            {' '}
            <div className="chartInfo-text">등락률</div>
            <div
              className={
                additionalData != null ? additionalData[tooltipIndex].className : 'chartInfo-data'
              }
            >
              {additionalData != null ? additionalData[tooltipIndex].rate : null}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
