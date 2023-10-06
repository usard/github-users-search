import React from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const Pie3D = ({ chartData }) => {
  const chartConfigs = {
    type: "pie3d", // The chart type
    // width: "500", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "languages", //Set the chart caption
        // subCaption: "xxxxxxxxxxxxxxxxxx", //Set the chart subcaption
        theme: "fusion", //Set the theme for your chart
      },
      data: chartData,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Pie3D;
