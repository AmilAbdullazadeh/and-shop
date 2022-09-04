//BarChart
export const BarChart = [
  {
    chart: {
      height: 500,
    },
    values: [
      {
        label: "A",
        value: 10,
        color: "#8983d7",
      },
      {
        label: "B",
        value: 35,
        color: "#f09366",
      },
      {
        label: "C",
        value: 150,
        color: "#47c2b0",
      },
      {
        label: "D",
        value: 120,
        color: "#8983d7",
      },
      {
        label: "E",
        value: 95,
        color: "#4597fa",
      },
      {
        label: "F",
        value: 13,
        color: "#fa5c77",
      },
      {
        label: "G",
        value: 10,
        color: "#51b9ca",
      },
    ],
  },
];
//BarChart2
export const BarChart2 = [
  {
    values: [
      {
        label: "1",
        value: 0.25,
        color: "#6259ca",
      },
      {
        label: "2",
        value: 1.76,
        color: "#6259ca",
      },
      {
        label: "3",
        value: 2.23,
        color: "#6259ca",
      },
      {
        label: "4",
        value: 2.95,
        color: "#6259ca",
      },
      {
        label: "5",
        value: 3.09,
        color: "#6259ca",
      },
      {
        label: "6",
        value: 3.67,
        color: "#6259ca",
      },
      {
        label: "7",
        value: 3.33,
        color: "#6259ca",
      },
      {
        label: "8",
        value: 3.21,
        color: "#6259ca",
      },
      {
        label: "9",
        value: 3.67,
        color: "#6259ca",
      },
    ],
  },
];
//LineChart
export function LineChart() {
  var sin = [],
    cos = [];
  for (var i = 0; i < 100; i++) {
    sin.push({ x: i, y: Math.sin(i / 10) });
    cos.push({ x: i, y: 0.5 * Math.cos(i / 10) });
  }

  return [
    {
      values: sin,
      key: "Sine Wave",
      color: "#ff7f0e",
    },
    {
      values: cos,
      key: "Cosine Wave",
      color: "#2ca02c",
    },
  ];
}
