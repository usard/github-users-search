import React from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReacFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
const Column3D = ({ chartData }) => {
  const chartConfigs = {
    type: "column3d",
    height: "400",
    width: "100%",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most popular",
        // subCaption: "",
        height: "400",
        xAxisName: "Repository",
        yAxisName: "stars",
        theme: "fusion",
      },
      data: chartData,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Column3D;
