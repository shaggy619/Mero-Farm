import React, { useContext, useState } from "react";
import { FarmContext } from "../context/FarmContext";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
  const { summary } = useContext(FarmContext);
  const [chartData] = useState({
    series: [summary.totalSold, summary.totalMortality, summary.totalRemaining],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Sold", "Mortality", "Remaining"],
      colors: ["#00E396", "#df1c1f", "#3a69ff"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 270,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="pie"
          width={380}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default PieChart;
