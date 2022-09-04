

export const echart1 = {
  option: {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    grid: {
      left: "6%",
      right: "3%",
      bottom: "8%",
      top: "3%",
    },
    xAxis: [
      {
        type: "category",
        axisTick: {
          alignWithLabel: true,
        },
        // prettier-ignore
        data: ['2007', '2009', '2011', '2013', '2015', '2017'],
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLine: {
          show: true,
        },
      },
      {
        type: "value",
        axisLine: {
          show: true,
        },
      },
      {
        type: "value",
        axisLine: {
          show: true,
        },
      },
    ],
    series: [
      {
        type: "bar",
        data: [30, 20, 50, 40, 60, 50],
        color:"#6259ca"
      },
      {
        type: "line",
        data: [200, 130, 90, 240, 130, 220],
         smooth: true,
        color:"#eb6f33"
      },
      {
        type: "line",
        data: [90, 70, 20, 50, 60, 120],
        smooth: true,
        color:"#09ad95",
      },
    ],
  },
};