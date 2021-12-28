import React from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { sampledata } from "./../helpers/utils";
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: "column2d",
  width: "100%",
  height: "100%",
  dataFormat: "json",
  dataSource: sampledata
};

export class BarChart extends React.Component {
  render() {
    return <ReactFC {...chartConfigs} />;
  }
}
