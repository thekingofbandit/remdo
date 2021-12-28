import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

charts(FusionCharts);

export default function StartupHistoryChart(props) {
  // on click date
  const onClickAction = (val) => {
    let a = val.toString().split("/");
    let b = a[2] + "-" + a[1] + "-" + a[0];
    let c = [a[2], a[1], a[0]].join("-");

    console.log(a);
    console.log(b);
    console.log(typeof val);
    console.log(c);
  };

  const dataSource = {
    chart: {
      theme: "fusion",
      xaxisname: "Date",
      yaxisname: "Minute",
      // xaxisminvalue: "1",
      // xaxismaxvalue: "12",
      ynumberprefix: "",
      // yaxismaxvalue: "24",
      // yaxisminvalue: "0",
      xnumbersuffix: "",
      labelDisplay: "rotate",
      slantLabel: "1",
      paletteColors:
        "#ff0000,#dadade,#4FD1C5,#ff0000,#f5222d,#1890ff,#dadade,#f5222d,#FC8181,#F6AD55,#F6E05E,#68D391,#4FD1C5,#63B3ED,#7F9CF5,#B794F4,#F687B3,#F56565,#ED8936,#ECC94B,#48BB78,#38B2AC,#4299E1,#667EEA,#9F7AEA,#ED64A6,#E53E3E,#DD6B20,#D69E2E,#38A169,#319795,#3182CE,#5A67D8,#805AD5,#D53F8C"

      // plottooltext:
      //   'Value: <b> $yDataValue</b><br />date: <b> $displayValue</b> <br />type: <b>$seriesName</b> <div id="test">test</div>'
    },
    categories: props.data.categories,
    dataset: props.data.dataset,
    events: {
      dataPlotRollOver: function (e) {
        var infoElem = document.getElementById("infolbl");
        infoElem.innerHTML =
          "You are hovering over the plot with binning from <b>" +
          e.data.startText +
          "</b> to <b>" +
          e.data.endText +
          "</b>. Aggregated value (avg.) is <b>" +
          Math.round(e.data.binValue * 100) / 100 +
          " (" +
          e.data.measure +
          ")</b>";
      },
      dataPlotRollOut: function (e) {
        var infoElem = document.getElementById("infolbl");
        infoElem.innerHTML = "Hover over the plots to see the details.";
      }
    }
  };
  return (
    <>
      <ReactFusioncharts
        type="scatter"
        width="100%"
        height="400"
        dataFormat="JSON"
        fcEvent-dataplotClick={(eventObj, dataObj) => {
          if (dataObj.datasetName === "Actual") {
            console.log(dataObj);
            // console.log(dataObj.displayValue);
            onClickAction(dataObj.displayValue);
            // console.log(dataObj.link);
            // var element = document.getElementById("test");
            // element.innerHTML = dataObj.link;
            // props.handleGetDateParams(dataObj.link);
            props.action();
          }
        }}
        // fcEvent-dataplotRollOver={(eventObj, dataObj) => {
        //   console.log(dataObj);
        //   console.log(dataObj);
        //   console.log(dataObj.link);
        //   var element = document.getElementById("test");
        //   element.innerHTML = dataObj.link;
        //   props.handleGetDateParams(dataObj.link);
        //   props.action();
        // }}
        // fcEvent-dataplotRollOut={(eventObj, dataObj) => {
        //   // console.log(dataObj);
        // }}
        dataSource={dataSource}
      />
      <div>
        <label id="infolbl">Hover over the plots to see the details.</label>
      </div>
    </>
  );
}
