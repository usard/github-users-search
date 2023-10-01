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
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most popular",
        // subCaption: "",
        xAxisName: "Repository",
        yAxisName: "stars",
        theme: "fusion",
      },
      data: chartData,
    },
  };
  return <ReacFC {...chartConfigs} />;
};

export default Column3D;
