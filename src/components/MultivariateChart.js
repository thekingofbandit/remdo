import React from "react";
import FusionCharts from "fusioncharts";
import TimeSeries from "fusioncharts/fusioncharts.timeseries";
import ExcelExport from "fusioncharts/fusioncharts.excelexport";
import Typography from "@material-ui/core/Typography";
import ReactFC from "react-fusioncharts";
import { sample } from "../helpers/bigdata";

ReactFC.fcRoot(FusionCharts, TimeSeries, ExcelExport);
class MultivariateChart extends React.Component {
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
            exportAtClientSide: 1,
            decimalSeparator: ",",
            thousandSeparator: ".",
            formatNumber: "2",
            forceDecimals: "1",
            forceYAxisValueDecimals: "1",
            forceXAxisValueDecimals: "1",
            theme: "fusion",
            multiCanvas: true,
            legendPosition: "top",
            legendAllowDrag: "1",
            exportEnabled: 1,
            exportFileName: "trends efficiency analysis",
            bgAlpha: "0",
            legendItemFontSize: "10",
            baseFontSize: "11",
            legendCaptionAlignment: "center",
            legendNumRows: "3",
            legendNumColumns: "1",
            canvasBgAlpha: "0",
            captionFontSize: "14",
            captionFontColor: "#207DEA",
            captionFontBold: "1",
            captionAlignment: "left",
            paletteColors:
              "#52c41a,#1890ff,#f5222d,#fa8c16,#562794,#F6AD55,#F6E05E,#68D391,#4FD1C5,#63B3ED,#7F9CF5,#B794F4,#F687B3,#F56565,#ED8936,#ECC94B,#48BB78,#38B2AC,#4299E1,#667EEA,#9F7AEA,#ED64A6,#E53E3E,#DD6B20,#D69E2E,#38A169,#319795,#3182CE,#5A67D8,#805AD5,#D53F8C"
          },

          // Show/Hide Custom Range Selector
          extensions: {
            customRangeSelector: {
              enabled: "0"
            }
          },

          legend: {
            alignment: "middle"
          },

          navigator: {
            enabled: 1,
            height: 10
          },
          caption: {
            text: ""
          },
          series: "Type",
          yaxis: sample.yAxis,
          dataMarker: sample.dataMarker,
          decimalSeparator: ",",
          thousandSeparator: ".",
          formatNumber: "2",
          forceDecimals: "1",
          forceYAxisValueDecimals: "1",
          forceXAxisValueDecimals: "1",
          tooltip: {
            enabled: true,
            toolText:
              "<b>$bin</b><br>$series.0.plotIdentifier $series.0.name: $series.0.dataValue<br>$series.1.plotIdentifier $series.1.name: <b>$series.1.dataValue</b>"
          }

          // yaxis: [
          //   {
          //     plot: [
          //       {
          //         value: 'Ambient pressure',
          //         connectnulldata: true,
          //       },
          //     ],
          //     min: '3',
          //     max: '6',
          //     title: 'O₂ Concentration (mg/L)',
          //     format: {
          //       prefix: '$',
          //     },
          //   },
          //   {
          //     plot: [
          //       {
          //         value: 'O2 concentration',
          //         connectnulldata: true,
          //       },
          //     ],
          //     min: '3',
          //     max: '6',
          //     title: 'O₂ Concentration (mg/L)',
          //     format: {
          //       prefix: '$',
          //     },
          //   },
          //   {
          //     plot: [
          //       {
          //         value: 'O2 concentration',
          //         connectnulldata: true,
          //       },
          //     ],
          //     min: '3',
          //     max: '6',
          //     title: 'O₂ Concentration (mg/L)',
          //     format: {
          //       prefix: '$',
          //     },
          //   },
          // ],
        },
        events: {
          dataPlotRollOver: function (e) {
            setTimeout(function () {
              const getChart = document.getElementById(`chartobject-1`);
              if (getChart) {
                const tooltipData = getChart.getElementsByClassName(
                  "fc__tooltip"
                );

                if (tooltipData && tooltipData.length > 0) {
                  for (let index = 0; index < tooltipData.length; index++) {
                    const getText = tooltipData[index].textContent;
                    // if (getText.indexOf("Anomaly") !== -1) {
                    //   tooltipData[index].style.display = "none";
                    // }
                    console.log(getText);
                  }
                }
              }
            }, 300);
          }
        }
      }
    };
  }

  async componentDidMount() {
    await this.onFetchData(sample.trend, sample.schema);
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
              exportAtClientSide: 1,
              decimalSeparator: ",",
              thousandSeparator: ".",
              formatNumber: "0",
              forceDecimals: "1",
              forceYAxisValueDecimals: "1",
              forceXAxisValueDecimals: "1",
              exportEnabled: 1,
              legendPosition: "top-right",
              legendAllowDrag: "1",
              paletteColors:
                "#52c41a,#1890ff,#f5222d,#fa8c16,#FC8181,#F6AD55,#F6E05E,#68D391,#4FD1C5,#63B3ED,#7F9CF5,#B794F4,#F687B3,#F56565,#ED8936,#ECC94B,#48BB78,#38B2AC,#4299E1,#667EEA,#9F7AEA,#ED64A6,#E53E3E,#DD6B20,#D69E2E,#38A169,#319795,#3182CE,#5A67D8,#805AD5,#D53F8C"
            },
            legend: {
              alignment: "middle"
            },
            tooltip: {
              enabled: "true",
              toolText:
                "<b>$bin</b><br>$series.0.plotIdentifier $series.0.name: $series.0.dataValue<br>$series.1.plotIdentifier $series.1.name: <b>$series.1.dataValue</b>"
            },

            yaxis: sample.yAxis
          } // update the value of specific key
        }
      }));
    }
  }

  onFetchData(a, b) {
    Promise.all([a, b]).then((res) => {
      const data = sample.data;
      const schema = sample.schema;
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
            {this.props.title && (
              <>
                <Typography
                  variant="subtitle1"
                  color="primary"
                  display="block"
                  align="left"
                  gutterBottom
                  className="mb-0 mt-10"
                  style={{ lineHeight: 1 }}
                >
                  {this.props.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  display="block"
                  className="mb-2"
                  gutterBottom
                  style={{ fontSize: "11px" }}
                >
                  {this.props.subTitle}
                </Typography>
              </>
            )}
            <ReactFC {...timeseriesDs} width="100%" height="100%" />
          </>
        ) : (
          "loading"
        )}
      </>
    );
  }
}

export default MultivariateChart;
