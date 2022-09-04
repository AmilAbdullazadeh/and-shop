

import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);
//options
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

// Linechart
export const Linechart = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};
// linechartdata
export const linechartdata = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      label: "Profits",
      data: [100, 420, 210, 420, 210, 320, 350],
      backgroundColor: "transparent",
      borderColor: "#6259ca",
      borderWidth: 3,
      pointBackgroundColor: "#ffffff",
      pointRadius: 2,
      fill: true,
      tension: 0.4,
    },
    {
      label: "Expenses",
      data: [450, 200, 350, 250, 480, 200, 400],
      backgroundColor: "transparent",
      borderColor: "#eb6f33",
      borderWidth: 3,
      pointBackgroundColor: "#ffffff",
      pointRadius: 2,
      fill: true,
      tension: 0.4,
    },
  ],
};

// Bar-chart 1
export const Barchart1 = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};
//barchart1data
export const barchart1data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      labels: "My First Dataset",
      data: [200, 450, 290, 367, 256, 543, 345],
      backgroundColor: "#9877f9",
      borderColor: "#9877f9",
      borderWidth: 2.0,
      pointBackgroundColor: "#ffffff",
      label: "Sales",
    },
  ],
};
// Bar-chart 2
export const Barchart2 = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};
//barchart2data
export const barchart2data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Data1",
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: "#6259ca",
      borderWidth: "0",
      backgroundColor: "#6259ca",
    },
    {
      label: "Data2",
      data: [28, 48, 40, 19, 86, 27, 90],
      borderColor: "#53caed",
      borderWidth: "0",
      backgroundColor: "#53caed",
    },
  ],
  options: {
    responsive: true,
    maintainAspectRatio: false,

    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            stepSize: 150,
            fontColor: "#77778e",
          },
          gridLines: {
            color: "rgba(119, 119, 142, 0.2)",
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            display: true,
            fontColor: "#77778e",
          },
          gridLines: {
            display: false,
            color: "rgba(119, 119, 142, 0.2)",
          },
        },
      ],
    },
    legend: {
      display: true,
      labels: {
        fontColor: "#77778e",
      },
    },
  },
};
// Area-chart

export const Areachart = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};
//areachart
export const areachart = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Data 1 ",
      borderColor: "rgba(235, 111, 51 ,0.9)",
      borderWidth: "1",
      backgroundColor: "rgba(	235, 111, 51, 0.7)",
      pointHighlightStroke: "rgba(235, 111, 51 ,1)",
      data: [16, 32, 18, 26, 42, 33, 44],
      fill: true,
      tension: 0.4,
    },
    {
      label: "Data 2",
      backgroundColor: "rgba(113, 76, 190, 0.5)",
      borderColor: "rgba(113, 76, 190, 0.9)",
      data: [22, 44, 67, 43, 76, 45, 12],
      fill: true,
      tension: 0.4,
    },
  ],
  options: {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            fontColor: "#77778e",
          },
          gridLines: {
            color: "rgba(119, 119, 142, 0.2)",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#77778e",
          },
          gridLines: {
            color: "rgba(119, 119, 142, 0.2)",
          },
        },
      ],
    },
    legend: {
      labels: {
        fontColor: "#77778e",
      },
    },
  },
};

// DONUT CHART
export const dchart = {
  datasets: [
    {
      data: [20, 20, 30, 5, 25],
      backgroundColor: ["#6259ca", "#53caed", "#01b8ff", "#f16d75", "#29ccbb"],
    },
  ],
  hoverOffset: 4,
};

//  piechart
export const piechart = {
  datasets: [
    {
      data: [20, 20, 30, 5, 25],
      backgroundColor: ["#6259ca", "#53caed", "#01b8ff", "#f16d75", "#29ccbb"],
    },
  ],
  hoverOffset: 4,
};

// Radarchart
export const Radarchart1 = {
  labels: [
    ["Eating", "Dinner"],
    ["Drinking", "Water"],
    "Sleeping",
    ["Designing", "Graphics"],
    "Coding",
    "Cycling",
    "Running",
  ],

  datasets: [
    {
      label: "Data1",
      data: [65, 59, 66, 45, 56, 55, 40],
      borderColor: "rgba(113, 76, 190, 0.9)",
      borderWidth: "1",
      backgroundColor: "rgba(113, 76, 190, 0.5)",
    },
    {
      label: "Data2",
      data: [28, 12, 40, 19, 63, 27, 87],
      borderColor: "rgba(235, 111, 51,0.8)",
      borderWidth: "1",
      backgroundColor: "rgba(235, 111, 51,0.4)",
    },
  ],
  options: {
    responsive: true,
    maintainAspectRatio: false,
    borderColor: "#000",
    borderWidth: "1",
    backgroundColor: "#000",
    legend: {
      display: false,
    },
    scale: {
      angleLines: { color: "#77778e", },
      gridLines: {
        color: "rgba(119, 119, 142, 0.2)",
      },
      ticks: {
        beginAtZero: true,
      },

      pointLabels: {
        fontColor: "#77778e",
      },
    },
  },
};
// polarchart
export const Polarchart1 = {
  labels: ["Data1", "Data2", "Data3", "Data4"],
  datasets: [
    {
      data: [18, 15, 9, 6, 19],
      backgroundColor: ["#6259ca","#9959ca", "#ec546c","#0774f8","#ca59c0",],
      hoverBackgroundColor: [
        "#ca59c0",
        "#6259ca",
        "#9959ca",
        "#ec546c",
        "#0774f8",
      ],
      borderColor: "transparent",
    },
  ],
  options: {
    scale: {
      gridLines: {
        color: "rgba(119, 119, 142, 0.2)",
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontColor: "#77778e",
      },
    },
  },
};
