import React from "react";
import Chartime from "../Chartime";
import { startupCurveChartData } from "../../helpers/utils";

class CharTimeDualAxis extends React.Component {
  render() {
    return (
      <div style={{ height: "1000px" }}>
        <Chartime
          title=""
          trend={startupCurveChartData.data}
          schema={startupCurveChartData.schema}
          yAxis={startupCurveChartData.yAxis}
          // xAxis={startupCurveChartData.xAxis}
          // datamarker={startupCurveChartData.datamarker}
          // count={1}
        />
      </div>
    );
  }
}

export default CharTimeDualAxis;
