import React from "react";
import FusionCharts from "fusioncharts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

const Bar3D = ({ chartData }) => {
  const chartConfigs = {
    type: "bar3d",
    height: "400",
    width: "100%",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "most forked repos",
        // xAxisName:
        // yAxisName:
        theme: "fusion",
      },
      data: chartData,
    },
  };
  return <ReactFC {...chartConfigs}></ReactFC>;
};

export default Bar3D;
