import React from "react";
import FusionCharts from "fusioncharts";
import TimeSeries from "fusioncharts/fusioncharts.timeseries";
import ExcelExport from "fusioncharts/fusioncharts.excelexport";
import Typography from "@material-ui/core/Typography";
import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, TimeSeries, ExcelExport);
class ChartTimeseries extends React.Component {
  constructor(props) {
    super(props);
    this.onFetchData = this.onFetchData.bind(this);
    // 2020-12-03 17:43:03
    this.state = {
      schemaFetch: [
        {
          name: "Time",
          type: "date",
          format: "%Y-%m-%d %H:%M:%S"
        },
        {
          name: "Type",
          type: "string",
          format: ""
        },
        {
          name: "N/A",
          type: "number",
          format: ""
        }
      ],
      timeseriesDs: {
        animation: "0",
        type: "timeseries",
        renderAt: "container",
        width: "100%",
        height: this.props.count > 1 ? `${this.props.count * 200}` : "500",
        dataSource: {
          chart: {
            theme: "fusion",
            formatNumber: "0",
            exportEnabled: 1,
            // syncAxisLimits: 1,
            multicanvas: true,
            exportFileName: "performance impact analysis",
            bgAlpha: "0",
            markerBgColor: "#FF0000",
            markerRadius: "10",
            showMarkerLabels: "1",
            entityFillColor: "#A8A8A8",
            entityFillHoverColor: "#E5E5E9",
            legendItemFontSize: "9",
            baseFontSize: "11",
            legendCaptionAlignment: "center",
            legendNumRows: "1",
            legendNumColumns: "1",
            canvasBgAlpha: "0",
            captionFontSize: "14",
            captionFontColor: "#207DEA",
            captionFontBold: "1",
            captionAlignment: "left",
            paletteColors:
              "#52c41a,#1890ff,#f5222d,#fa8c16,#FC8181,#F6AD55,#F6E05E,#68D391,#4FD1C5,#63B3ED,#7F9CF5,#B794F4,#F687B3,#F56565,#ED8936,#ECC94B,#48BB78,#38B2AC,#4299E1,#667EEA,#9F7AEA,#ED64A6,#E53E3E,#DD6B20,#D69E2E,#38A169,#319795,#3182CE,#5A67D8,#805AD5,#D53F8C"
          },
          // Show/Hide Custom Range Selector
          extensions: {
            customRangeSelector: {
              enabled: "0"
            }
          },
          navigator: {
            enabled: 0,
            height: 10
          },
          caption: {
            text: ""
          },
          series: "Type",
          yaxis: [],
          xaxis: [],
          tooltip: {
            enabled: Boolean,
            style: {
              container: {}, //HTMLStyle | String
              text: {}, //HTMLtyle | String
              header: {}, //HTMLStyle | String
              body: {} //HTMLStyle | String
            }
          }
        }
      }
    };
  }

  async componentDidMount() {
    try {
      const response = await this.onFetchData(
        this.props.trend,
        this.props.schema
      );

      const setyaxis = await this.setState((prevState) => ({
        timeseriesDs: {
          // object that we want to update
          ...prevState.timeseriesDs, // keep all other key-value pairs
          dataSource: {
            ...prevState.dataSource,
            chart: {
              ...prevState.chart,
              multicanvas: true,
              formatNumber: "0",
              markerBgColor: "#FF0000",
              markerRadius: "10",
              markerbordercolor: "000000",
              markerbgcolor: "000000",
              showMarkerLabels: "1",
              entityFillColor: "#000000",
              entityFillHoverColor: "#000000",
              legendItemFontSize: "10",
              baseFontSize: "11",
              legendCaptionAlignment: "center",
              legendNumRows: "1",
              legendNumColumns: "1",
              canvasBgAlpha: "0",
              exportEnabled: 1,
              exportFileName: "performance impact analysis",
              paletteColors:
                "#52c41a,#1890ff,#f5222d,#fa8c16,#FC8181,#F6AD55,#F6E05E,#68D391,#4FD1C5,#63B3ED,#7F9CF5,#B794F4,#F687B3,#F56565,#ED8936,#ECC94B,#48BB78,#38B2AC,#4299E1,#667EEA,#9F7AEA,#ED64A6,#E53E3E,#DD6B20,#D69E2E,#38A169,#319795,#3182CE,#5A67D8,#805AD5,#D53F8C"
            },
            extensions: {
              customRangeSelector: {
                enabled: "0"
              }
            },
            navigator: {
              enabled: 0,
              height: 10
            },
            yaxis: this.props.yAxis,
            // xaxis: this.props.xAxis,
            datamarker: this.props.datamarker,
            tooltip: {
              enabled: true,
              style: {
                container: {}, //HTMLStyle | String
                text: {}, //HTMLtyle | String
                header: {}, //HTMLStyle | String
                body: {} //HTMLStyle | String
              }
            }
          } // update the value of specific key
        }
      }));
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidUpdate(prevProps) {
    if (this.props.trend !== prevProps.trend) {
      await this.onFetchData(this.props.trend, this.props.schema);
      const setyaxis = await this.setState((prevState) => ({
        timeseriesDs: {
          // object that we want to update
          ...prevState.timeseriesDs, // keep all other key-value pairs
          dataSource: {
            ...prevState.dataSource,
            chart: {
              ...prevState.chart,
              multicanvas: false,
              plotToolText:
                "Store location: $label <br> Sales (YTD): $dataValue <br> $displayValue",
              exportEnabled: 1,
              formatNumber: "0",
              markerBgColor: "#FF0000",
              markerRadius: "10",
              showMarkerLabels: "1",
              entityFillColor: "#A8A8A8",
              entityFillHoverColor: "#E5E5E9",
              exportFileName: "performance impact analysis",
              paletteColors:
                "#52c41a,#1890ff,#f5222d,#fa8c16,#FC8181,#F6AD55,#F6E05E,#68D391,#4FD1C5,#63B3ED,#7F9CF5,#B794F4,#F687B3,#F56565,#ED8936,#ECC94B,#48BB78,#38B2AC,#4299E1,#667EEA,#9F7AEA,#ED64A6,#E53E3E,#DD6B20,#D69E2E,#38A169,#319795,#3182CE,#5A67D8,#805AD5,#D53F8C"
            },
            extensions: {
              customRangeSelector: {
                enabled: "0"
              }
            },
            navigator: {
              enabled: 0,
              height: 10
            },
            yaxis: this.props.yAxis,
            // xaxis: this.props.xAxis,
            tooltip: {
              enabled: false // Disables the Tooltip
            }
            // datamarker: this.props.datamarker
          } // update the value of specific key
        }
      }));
    }
  }

  onFetchData(a, b) {
    Promise.all([a, b]).then((res) => {
      const data = res[0];
      const schema = res[1];
      const fusionTable = new FusionCharts.DataStore().createDataTable(
        data,
        schema
      );
      const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
      timeseriesDs.dataSource.data = fusionTable;
      this.setState({
        timeseriesDs
      });
    });
  }

  render() {
    const { timeseriesDs } = this.state;
    return (
      <>
        {timeseriesDs.dataSource.data ? (
          <>
            <ReactFC {...timeseriesDs} />
          </>
        ) : (
          "loading"
        )}
      </>
    );
  }
}

export default ChartTimeseries;
