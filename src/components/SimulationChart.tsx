import React, { useEffect } from "react";
import * as echarts from "echarts";

interface Props {
  containerId: string;
  data: any;
}

const SimulationChart: React.FC<Props> = ({ containerId, data }) => {
  useEffect(() => {
    const chartDom = document.getElementById(containerId);
    if (!chartDom) return;
    const myChart = echarts.init(chartDom);
    myChart.setOption(data);
    const resize = () => myChart.resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      myChart.dispose();
    };
  }, [containerId, data]);

  return <div id={containerId} className="w-full h-[600px]" />;
};

export default SimulationChart;
