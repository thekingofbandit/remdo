import React from "react";
import Scatter from "./Scatter";
import { dataScatterChart } from "../../helpers/utils";

class ScatterChart extends React.Component {
  render() {
    return (
      <div>
        <Scatter
          data={dataScatterChart}
          handleGetDateParams={(a, b) => console.log(b)}
          action={() => console.log("ok")}
        />
      </div>
    );
  }
}

export default ScatterChart;
