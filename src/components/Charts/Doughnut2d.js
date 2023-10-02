import React from "react";
import FusionCharts from "fusioncharts";
import ReactFC from "react-fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import { useGithubContext } from "../../context/context";
import { Doughnut2D } from ".";
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
const Doughnut2d = ({ chartData }) => {
  const chartConfigs = {
    type: "doughnut2d", // The chart type
    height: "400",
    dataFormat: "json", // Data type
    dataSource: {
      chart: {
        caption: "most starred languages",
        decimals: "2",
        theme: "fusion", //Set the theme for your chart
      },
      data: chartData,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Doughnut2d;
