//echart1
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
        data: [2014,2015,2016,2017,2018],
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
        data: [10, 15, 9, 18, 10],
        color:"#6259ca"
      },
      {
        type: "bar",
        data: [10, 14, 10, 15, 9],
        color:"#eb6f33"
      },
      {
        type: "line",
        data: [8, 5, 25, 10, 10],
        smooth: true,
        color:"#09ad95",
      },
    ],
  },
};
//echart2
export const echart2 = {
  option: {
    legend: {},
    grid: {
      top: 70,
      bottom: 50,
      left: "6%",
    },
    xAxis: [
      {
        type: "category",
        // prettier-ignore
        data: ['2014','2015','2016','2017','2018'],
        
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        type: "line",
        smooth: true,
        data: ["12", "25", "12", "35", "12", "20"],
        color:"#eb6f33",
      },
      {
        type: "line",
        smooth: true,
        data: ["9", "11", "28", "10", "10", "15"],
        color:"#6259ca",
      },
    ],
  },
};
//echart3
export const echart3 = {
  option: {
    grid: {
      left: "6%",
      right: "3%",
      bottom: "8%",
      top: "3%",
    },

    xAxis: [
      {
        type: "value",
        axisTick: {
          alignWithLabel: true,
        },
        // prettier-ignore
        data: [2014,2015,2016,2017,2018],
      },
    ],
    yAxis: [
      {
        type: "category",
      },
      {
        type: "value",
      },
      {
        type: "value",
      },
    ],
    series: [
      {
        type: "bar",
        data: [10, 15, 9, 18, 10],
        color:"#6259ca"
      },
      {
        type: "bar",
        data: [10, 14, 10, 15, 9],
        color:"#eb6f33",
      },
      {
        type: "line",
        data: [8, 5, 25, 10, 10],
        smooth: true,
        color:"#09ad95",
      },
    ],
  },
};
//echart4
export const echart4 = {
  option: {
    legend: {},
    grid: {
      top: 10,
      bottom: 30,
    },
    xAxis: [
      {
        type: "value",
      },
    ],
    yAxis: [
      {
        type: "category",
        data: ["2014", "2015", "2016", "2017", "2018"],
      },
    ],
    series: [
      {
        type: "line",
        smooth: true,
        data: ["12", "25", "12", "35", "12", "20"],
        color:"#eb6f33",
      },
      {
        type: "line",
        smooth: true,
        data: ["9", "11", "28", "10", "10", "15"],
        color:"#6259ca",
      },
    ],
  },
};
//echart5
export const echart5 = {
  option: {
    xAxis: {
      type: "category",
      data: [
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [15, 17, 19, 13, 28, 22, 36, 15, 25],
        type: "bar",
        stack: "total",
        color:"#6259ca",
      },
      {
        type: "bar",
        stack: "total",
        data: [25, 32, 35, 64, 52, 45, 35, 34, 54],
        color:"#eb6f33",
      },
    ],
  },
};
//echart6
export const echart6 = {
  option: {
    grid: {
      left: "6%",
      right: "3%",
      bottom: "8%",
      top: "-1%",
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: "category",
      data: [
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
      ],
    },
    series: [
      {
        type: "bar",
        stack: "total",
        data: [15, 17, 19, 13, 28, 22, 36, 15, 25],
        color:"#6259ca",
      },
      {
        type: "bar",
        stack: "total",
        data: [25, 32, 35, 64, 52, 45, 35, 34, 54],
        color:"#eb6f33",
      },
    ],
  },
};
//echart7
export const echart7 = {
  option: {
    xAxis: {
      type: "category",
      data: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [20, 20, 36, 18, 14, 20, 25, 20],
        type: "line",
        color:"#6259ca",

      },
    ],
  },
};
//echart8
export const echart8 = {
  option: {
    xAxis: {
      type: "category",
      data: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [20, 20, 36, 18, 14, 20, 25, 20],
        type: "line",
        smooth: true,
        color:"#eb6f33",
      },
    ],
  },
};
