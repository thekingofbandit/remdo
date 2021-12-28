import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { sampledatatwo } from "../helpers/utils";
// Resolves charts dependancy
charts(FusionCharts);

ReactFC.fcRoot(FusionCharts, charts, FusionTheme);

const dataSource = sampledatatwo;

export class MultiSeries extends React.Component {
  render() {
    return (
      <ReactFC
        type="msline"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}
