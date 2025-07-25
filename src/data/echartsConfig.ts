export const simulationOption = {
  animation: false,
  backgroundColor: "#000",
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    top: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
    show: false,
    min: -100,
    max: 100,
  },
  yAxis: {
    type: "value",
    show: false,
    min: -100,
    max: 100,
  },
  series: [
    {
      name: "Matahari",
      type: "scatter",
      symbolSize: 30,
      data: [[0, 0]],
      itemStyle: { color: "#FFA500" },
      label: {
        show: true,
        position: "right",
        formatter: "Matahari",
        color: "#fff",
      },
    },
    {
      name: "Merkurius",
      type: "scatter",
      symbolSize: 6,
      data: [[30, 0]],
      itemStyle: { color: "#8B8B8B" },
      label: {
        show: true,
        position: "right",
        formatter: "Merkurius",
        color: "#fff",
      },
    },
    {
      name: "Venus",
      type: "scatter",
      symbolSize: 10,
      data: [[45, 0]],
      itemStyle: { color: "#E6E6FA" },
      label: {
        show: true,
        position: "right",
        formatter: "Venus",
        color: "#fff",
      },
    },
    {
      name: "Bumi",
      type: "scatter",
      symbolSize: 12,
      data: [[60, 0]],
      itemStyle: { color: "#1E90FF" },
      label: {
        show: true,
        position: "right",
        formatter: "Bumi",
        color: "#fff",
      },
    },
    {
      name: "Mars",
      type: "scatter",
      symbolSize: 8,
      data: [[75, 0]],
      itemStyle: { color: "#FF4500" },
      label: {
        show: true,
        position: "right",
        formatter: "Mars",
        color: "#fff",
      },
    },
    {
      name: "Jupiter",
      type: "scatter",
      symbolSize: 20,
      data: [[90, 0]],
      itemStyle: { color: "#CD853F" },
      label: {
        show: true,
        position: "right",
        formatter: "Jupiter",
        color: "#fff",
      },
    },
    {
      name: "Saturnus",
      type: "scatter",
      symbolSize: 18,
      data: [[105, 0]],
      itemStyle: { color: "#DAA520" },
      label: {
        show: true,
        position: "right",
        formatter: "Saturnus",
        color: "#fff",
      },
    },
    {
      name: "Uranus",
      type: "scatter",
      symbolSize: 14,
      data: [[120, 0]],
      itemStyle: { color: "#ADD8E6" },
      label: {
        show: true,
        position: "right",
        formatter: "Uranus",
        color: "#fff",
      },
    },
    {
      name: "Neptunus",
      type: "scatter",
      symbolSize: 14,
      data: [[135, 0]],
      itemStyle: { color: "#4169E1" },
      label: {
        show: true,
        position: "right",
        formatter: "Neptunus",
        color: "#fff",
      },
    },
  ],
};
