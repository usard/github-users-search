import React from "react";

const chartConfigs = {
  type: "column2d", // The chart type
  width: "400", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "most popular repostiories", //Set the chart caption
      subCaption: "xxxxxxxxxxxxxxxxxx", //Set the chart subcaption
      xAxisName: "repo name", //Set the x-axis name
      yAxisName: "stars (MMbbl)", //Set the y-axis name
      numberSuffix: "K",
      theme: "fusion", //Set the theme for your chart
    },
    // Chart Data - from step 2
  },
};
const ExampleChart = () => {
  return <div>chart</div>;
};

export default ExampleChart;
