import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

// https://apexcharts.com/docs/chart-types/candlestick/ 참고
// 툴팁 : 마우스 포인터라 불리는 커서와 함께 동작한다.
// 사용자가 커서에 항목을 클릭하지 않고 가리키면 조그마한 상자가 항목 위에 나타나서 보충 설명을 보여 준다.
const Chart = props => {
  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const [category, setCategory] = useState('stock');
  const [series, setSeries] = useState([{}]);
  const [selectedItem, setSelectedItem] = useState();
  const [additionalData, setAdditionalData] = useState();
  const [tooltipData, setTooltipData] = useState({
    open: '',
    high: '',
    low: '',
    close: '',
    date: '',
  });

  useEffect(() => {
    if (props.category == 'stock') {
      setCategory('stock');
    } else if (props.category == 'coin') {
      setCategory('coin');
    }
  }, [props.category]);

  let newArr = { open: '', high: '', low: '', close: '', date: '' };

  useEffect(() => {
    setAdditionalData();
    setSelectedItem(props.sendItem);
  }, [props.sendItem]);

  useEffect(() => {
    if (selectedItem != null) {
      setOptions({
        ...options,
        title: { text: selectedItem.name },
      });
      let url;
      if (category == 'stock') {
        url = 'stock/candle-data?code=' + String(selectedItem.code);
      } else if (category == 'coin') {
        url = '/api/coin/candle-data?code=' + String(selectedItem.code);
      }
      if (url != null) {
        axios.get(url).then(res => {
          console.log('뭐냐 ===> ', res.data.candleData.length);

          if (res.data.candleData.length != 0) {
            setTooltipData({
              open: res.data.candleData[res.data.candleData.length - 1].startValue,
              high: res.data.candleData[res.data.candleData.length - 1].highValue,
              low: res.data.candleData[res.data.candleData.length - 1].lowValue,
              close: res.data.candleData[res.data.candleData.length - 1].endValue,
              date: res.data.candleData[res.data.candleData.length - 1].date,
              idx: res.data.candleData.length - 1,
            });

            setAdditionalData(
              res.data.candleData.map((res_data, index) => {
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

            setSeries([
              {
                data: res.data.candleData.map((res_data, index) => {
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
            console.log('additionalData', additionalData);
          }
        });
      }
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

        setTooltipData({ open: o, high: h, low: l, close: c, date: d, idx: dataPointIndex });
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

  const onClick = e => {
    console.log(additionalData);
  };
  return (
    <div className="chart-container" id={props.isPc ? null : 'm'}>
      <ReactApexChart options={options} series={series} type="candlestick" height={320} />

      <div id="chartInfo-div" onClick={onClick}>
        <div className="chartInfo-date">{getFormatDate(tooltipData.date)}</div>

        <div className="chartInfo">
          <div className="chartInfo-container">
            <div className="chartInfo-text">시작</div>
            <div className="chartInfo-data">
              {parseInt(tooltipData.open).toLocaleString('ko-KR')}
            </div>
          </div>
          <div className="chartInfo-container">
            {' '}
            <div className="chartInfo-text">마지막</div>
            <div className="chartInfo-data">
              {parseInt(tooltipData.high).toLocaleString('ko-KR')}
            </div>
          </div>
        </div>

        <div className="chartInfo">
          <div className="chartInfo-container">
            {' '}
            <div className="chartInfo-text">최고</div>
            <div className="chartInfo-data">
              {parseInt(tooltipData.low).toLocaleString('ko-KR')}
            </div>
          </div>
          <div className="chartInfo-container">
            {' '}
            <div className="chartInfo-text">최저</div>
            <div className="chartInfo-data">
              {parseInt(tooltipData.close).toLocaleString('ko-KR')}
            </div>
          </div>
        </div>

        <div className="chartInfo">
          <div className="chartInfo-container">
            {' '}
            <div className="chartInfo-text">거래량</div>
            <div className="chartInfo-data">
              {additionalData != null
                ? additionalData[tooltipData.idx].tradeAmount.toFixed(2)
                : null}
            </div>
          </div>
          <div className="chartInfo-container">
            {' '}
            <div className="chartInfo-text">등락률</div>
            <div
              className={
                additionalData != null
                  ? additionalData[tooltipData.idx].className
                  : 'chartInfo-data'
              }
            >
              {additionalData != null ? additionalData[tooltipData.idx].rate.toFixed(5) : null}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
