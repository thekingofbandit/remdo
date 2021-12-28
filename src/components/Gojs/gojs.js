import React from "react";
// import go from "gojs";
// import * as go from 'gojs';
import "gojs/extensionsTS/Figures.js";
// /Users/sml/Git/soket-tools-new/node_modules/gojs/extensionsTS/Figures.js
import go from "gojs/release/go";
import PropTypes from "prop-types";
const goObj = go.GraphObject.make;

export default class GoJs extends React.Component {
  constructor(props) {
    super(props);

    this.renderCanvas = this.renderCanvas.bind(this);

    this.state = { myModel: null, myDiagram: null };
  }

  renderCanvas() {
    function nodeFillConverter(figure, color) {
      switch (figure) {
        case "AndGate":
          // right to left so when it's rotated, it goes from top to bottom
          return goObj(go.Brush, "Linear", {
            0: "#5ab2f8",
            1: "#83c4f9",
            start: go.Spot.Right,
            end: go.Spot.Left
          });
        case "OrGate":
          return goObj(go.Brush, "Linear", {
            0: "#60b5f9",
            1: "#60b5f9",
            start: go.Spot.Right,
            end: go.Spot.Left
          });
        case "Circle":
          return goObj(go.Brush, "Linear", { 0: "#ffffff00", 1: "#ffffff00" });
        case "Triangle":
          return goObj(go.Brush, "Linear", { 0: "#60b5f9", 1: "#60b5f9" });
        default:
          return "transparent";
      }
    }

    let model = goObj(go.TreeModel);
    let diagram = goObj(go.Diagram, this.refs.goJsDiv, {
      allowCopy: false,
      allowDelete: false,
      "draggingTool.dragsTree": true,
      layout: goObj(go.TreeLayout, { angle: 90, layerSpacing: 30 }),
      "undoManager.isEnabled": true
    });

    // diagram.nodeTemplate = goObj(
    //   go.Node,
    //   'Vertical',
    //   { selectionObjectName: 'BODY' },
    //   goObj(
    //     go.Panel,
    //     'Auto',
    //     { name: 'BODY' },
    //     goObj(
    //       go.Shape,
    //       'RoundedRectangle',
    //       new go.Binding('fill'),
    //       new go.Binding('stroke')
    //     ),
    //     goObj(
    //       go.TextBlock,
    //       {
    //         font: 'bold 12pt Arial, sans-serif',
    //         margin: new go.Margin(4, 2, 2, 2),
    //       },
    //       new go.Binding('text')
    //     )
    //   ),
    //   goObj(
    //     go.Panel, // this is underneath the "BODY"
    //     { height: 15 }, // always this height, even if the TreeExpanderButton is not visible
    //     goObj('TreeExpanderButton')
    //   )
    // );

    diagram.nodeTemplate = goObj(
      // the default node template
      go.Node,
      "Spot",
      {
        selectionObjectName: "BODY",
        locationSpot: go.Spot.Center,
        locationObjectName: "BODY"
      },
      // the main "BODY" consists of a Rectangle surrounding some text
      goObj(
        go.Panel,
        "Auto",
        { name: "BODY", portId: "" },
        goObj(
          go.Shape,
          "RoundedRectangle",
          { strokeWidth: 0 },
          new go.Binding("fill", "fill")
        ),

        // goObj(
        //         go.Shape,
        //         'RoundedRectangle',
        //         new go.Binding('fill'),
        //         new go.Binding('stroke')
        //       ),
        goObj(
          go.TextBlock,
          {
            margin: new go.Margin(10, 20, 10, 20),
            maxSize: new go.Size(100, NaN),
            stroke: "#ffffff",
            font: "10pt Segoe UI, sans-serif"
          },
          new go.Binding("text")
        )
      ), // end "BODY", an Auto Panel

      // border 5ab2f8
      // border shadow right bottom #83c4f9
      // text #60b5f9
      // background #e8f4ff
      goObj("TreeExpanderButton", {
        alignment: go.Spot.Right,
        alignmentFocus: go.Spot.Left,
        "ButtonBorder.figure": "RoundedRectangle",
        width: 14,
        "ButtonIcon.stroke": "#5ab2f8",
        "ButtonBorder.fill": "#e8f4ff",
        "ButtonBorder.stroke": "#60b5f9",
        _buttonFillOver: "#ffffff",
        _buttonStrokeOver: "#60b5f9"
      }),
      goObj(
        go.Shape,
        "LineV",
        new go.Binding("visible", "figure", function (f) {
          return f !== "None";
        }),
        {
          strokeWidth: 1.5,
          height: 0,
          alignment: new go.Spot(0.5, 1, 0, -1),
          alignmentFocus: go.Spot.Top
        }
      ),
      goObj(
        go.Shape,
        new go.Binding("visible", "figure", function (f) {
          return f !== "None";
        }),
        {
          alignment: new go.Spot(0.5, 1, 0, 5),
          alignmentFocus: go.Spot.Top,
          width: 30,
          height: 30,
          stroke: null
        },
        new go.Binding("figure"),
        new go.Binding("fill", "figure", nodeFillConverter),

        new go.Binding("angle", "figure", function (f) {
          return f === "OrGate" || f === "AndGate" ? -90 : 0;
        })
      ), // ORs and ANDs should point upwards
      goObj(
        go.TextBlock,
        new go.Binding("visible", "figure", function (f) {
          return f !== "None";
        }), // if we don't have a figure, don't display any choice text
        {
          alignment: new go.Spot(0.5, 1, 20, 20),
          alignmentFocus: go.Spot.Left,
          stroke: "#5ab2f8",
          font: "10pt Segoe UI, sans-serif"
        },
        new go.Binding("text", "choice")
      )
    );

    // diagram.linkTemplate = goObj(
    //   go.Link,
    //   goObj(go.Shape, { strokeWidth: 1.5 })
    // );

    diagram.linkTemplate = goObj(
      go.Link,
      go.Link.Orthogonal,
      { layerName: "Background", curviness: 20, corner: 15 },
      goObj(go.Shape, { strokeWidth: 1.5, stroke: "#5ab2f8" })
    );

    this.setState({ myModel: model, myDiagram: diagram }, () => {
      model.nodeDataArray = this.props.data;
      diagram.model = model;
      this.setState({ myModel: model, myDiagram: diagram });
    });
  }

  componentDidMount() {
    this.renderCanvas();
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      console.log("Updating");
      const model = this.state.myModel;
      const diagram = this.state.myDiagram;
      model.nodeDataArray = this.props.data;
      diagram.model = model;
      this.setState({ myModel: model, myDiagram: diagram });
    }
  }

  render() {
    return (
      <div
        className={this.props.className}
        ref="goJsDiv"
        style={{ width: "500px", height: "500px", backgroundColor: "#ffffff" }}
      ></div>
    );
  }
}

GoJs.propTypes = { data: PropTypes.object.isRequired };
GoJs.defaultProps = { data: "[]" };
