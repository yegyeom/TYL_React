import React from "react";
import ReactApexChart from "react-apexcharts";
import ChartStorage from './ChartStorage.js';
// https://apexcharts.com/docs/chart-types/candlestick/ 참고
// 툴팁 : 마우스 포인터라 불리는 커서와 함께 동작한다. 
// 사용자가 커서에 항목을 클릭하지 않고 가리키면 조그마한 상자가 항목 위에 나타나서 보충 설명을 보여 준다.
const Chart = () => {


    const [series, setSeries] = React.useState([
        {
            name: "삼성전자",
            data: [
                {
                    x: new Date(1538866800000),// 어떤식으로 데이터가 들어오는지 보고 레이블 수정하자.
                    y: [6591.97, 6596.07, 6585, 6588.39]
                },
                {
                    x: new Date(1538868600000),
                    y: [6587.6, 6598.21, 6587.6, 6594.27]
                },
                {
                    x: new Date(1538870400000),
                    y: [6596.44, 6601, 6590, 6596.55]
                },
                {
                    x: new Date(1538872200000),
                    y: [6598.91, 6605, 6596.61, 6600.02]
                },
                {
                    x: new Date(1538874000000),
                    y: [6600.55, 6605, 6589.14, 6593.01]
                },
                {
                    x: new Date(1538875800000),
                    y: [6593.15, 6605, 6592, 6603.06]
                },
                {
                    x: new Date(1538877600000),
                    y: [6603.07, 6604.5, 6599.09, 6603.89]
                },
                {
                    x: new Date(1538879400000),
                    y: [6604.44, 6604.44, 6600, 6603.5]
                },
                {
                    x: new Date(1538881200000),
                    y: [6603.5, 6603.99, 6597.5, 6603.86]
                },
                {
                    x: new Date(1634883000000),
                    y: [6603.85, 6605, 6600, 6604.07]
                },
                {
                    x: new Date(1648884800000),
                    y: [6604.98, 6606, 6604.07, 6606]
                }
            ]
        }
    ]);


    const [options, setOptions] = React.useState({



        title: {
            text: "삼성전자",
        },

        chart: {
        },

        xaxis: {

            type: 'category',

            labels: {
                format: 'MM yyyy'
            },


            axisBorder: {
                show: true,
                color: "#FF0000",
            },

        },

        yaxis: {
            legend: {
                title: "dan"
            }
        },

        // 툴팁 옵션
        tooltip: {
        },

        // 색깔 옵션
        plotOptions: {
            candlestick: {
                colors: {
                    upward: '#FF0000',
                    downward: '#001AFF'
                },
                wick: {
                    useFillColor: true,
                }
            }
        }
    });

    return (
        <div className="chart-container">
            <ReactApexChart
                options={options}
                series={series}
                type="candlestick"
                height={400}
            />
        </div >
    );
};


export default Chart;
