import React from "react";
import CheckboxTree from "react-checkbox-tree-enhanced";

const nodes = [
  {
    unitId: "",
    type: "region",
    label: "Jawa, Madura dan Bali",
    value: "2-region",
    showCheckbox: false,
    children: [
      {
        unitId: "",
        type: "plant",
        label: "PLTU Tanjung Awar-Awar",
        value: "6-plant",
        showCheckbox: true,
        children: [
          {
            unitId: "91",
            type: "unit",
            label: "PLTU Tanjung Awar-Awar 1",
            value: "91-unit",
            showCheckbox: true,
            children: [
              {
                unitId: "91",
                type: "equipment",
                label: "BOILER",
                value: "6-91-BOILER-2",
                showCheckbox: true,
                children: []
              },
              {
                unitId: "91",
                type: "equipment",
                label: "STEAM TURBINE",
                value: "6-91-STEAM TURBINE-3",
                showCheckbox: true,
                children: []
              },
              {
                unitId: "91",
                type: "equipment",
                label: "CONDENSER",
                value: "6-91-CONDENSER-4",
                showCheckbox: true,
                children: []
              },
              {
                unitId: "91",
                type: "equipment",
                label: "AIR HEATER",
                value: "6-91-AIR HEATER-5",
                showCheckbox: true,
                children: []
              },
              {
                unitId: "91",
                type: "equipment",
                label: "HPH",
                value: "6-91-HPH-6",
                showCheckbox: true,
                children: []
              },
              {
                unitId: "91",
                type: "equipment",
                label: "LPH",
                value: "6-91-LPH-7",
                showCheckbox: true,
                children: []
              }
            ]
          },
          {
            unitId: "92",
            type: "unit",
            label: "PLTU Tanjung Awar-Awar 2",
            value: "92-unit",
            showCheckbox: true,
            children: [
              {
                unitId: "92",
                type: "equipment",
                label: "BOILER",
                value: "6-92-BOILER-2",
                showCheckbox: true,
                children: []
              },
              {
                unitId: "92",
                type: "equipment",
                label: "STEAM TURBINE",
                value: "6-92-STEAM TURBINE-3",
                showCheckbox: true,
                children: []
              },
              {
                unitId: "92",
                type: "equipment",
                label: "CONDENSER",
                value: "6-92-CONDENSER-4",
                showCheckbox: true,
                children: []
              },
              {
                unitId: "92",
                type: "equipment",
                label: "AIR HEATER",
                value: "6-92-AIR HEATER-5",
                showCheckbox: true,
                children: []
              },
              {
                unitId: "92",
                type: "equipment",
                label: "HPH",
                value: "6-92-HPH-6",
                showCheckbox: true,
                children: []
              },
              {
                unitId: "92",
                type: "equipment",
                label: "LPH",
                value: "6-92-LPH-7",
                showCheckbox: true,
                children: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    unitId: "",
    type: "region",
    label: "Sumatera - Kalimantan",
    value: "1-region",
    showCheckbox: false,
    children: [
      {
        unitId: "",
        type: "plant",
        label: "PLTU Tenayan",
        value: "8-plant",
        showCheckbox: true,
        children: [
          {
            unitId: "101",
            type: "unit",
            label: "PLTU Tenayan 1",
            value: "101-unit",
            showCheckbox: true,
            children: [
              {
                unitId: "101",
                type: "equipment",
                label: "BOILER",
                value: "8-101-BOILER-2",
                showCheckbox: true,
                children: []
              },
              {
                unitId: "101",
                type: "equipment",
                label: "STEAM TURBINE",
                value: "8-101-STEAM TURBINE-3",
                showCheckbox: true,
                children: []
              },
              {
                unitId: "101",
                type: "equipment",
                label: "CONDENSER",
                value: "8-101-CONDENSER-4",
                showCheckbox: true,
                children: []
              },
              {
                unitId: "101",
                type: "equipment",
                label: "AIR HEATER",
                value: "8-101-AIR HEATER-5",
                showCheckbox: true,
                children: []
              },
              {
                unitId: "101",
                type: "equipment",
                label: "HPH",
                value: "8-101-HPH-6",
                showCheckbox: true,
                children: []
              },
              {
                unitId: "101",
                type: "equipment",
                label: "LPH",
                value: "8-101-LPH-7",
                showCheckbox: true,
                children: []
              }
            ]
          },
          {
            unitId: "102",
            type: "unit",
            label: "PLTU Tenayan 2",
            value: "102-unit",
            showCheckbox: true,
            children: [
              {
                unitId: "102",
                type: "equipment",
                label: "BOILER",
                value: "8-102-BOILER-2",
                showCheckbox: true,
                children: []
              },
              {
                unitId: "102",
                type: "equipment",
                label: "STEAM TURBINE",
                value: "8-102-STEAM TURBINE-3",
                showCheckbox: true,
                children: []
              },
              {
                unitId: "102",
                type: "equipment",
                label: "CONDENSER",
                value: "8-102-CONDENSER-4",
                showCheckbox: true,
                children: []
              },
              {
                unitId: "102",
                type: "equipment",
                label: "AIR HEATER",
                value: "8-102-AIR HEATER-5",
                showCheckbox: true,
                children: []
              },
              {
                unitId: "102",
                type: "equipment",
                label: "HPH",
                value: "8-102-HPH-6",
                showCheckbox: true,
                children: []
              },
              {
                unitId: "102",
                type: "equipment",
                label: "LPH",
                value: "8-102-LPH-7",
                showCheckbox: true,
                children: []
              }
            ]
          }
        ]
      }
    ]
  }
];

class ExpandedTree extends React.Component {
  constructor() {
    super();

    this.state = { checked: [], expanded: [] };
  }

  getNodeIds(nodes) {
    let ids = [];

    nodes.forEach(({ value, children }) => {
      ids = [...ids, value, ...this.getNodeIds(children)];
    });

    return ids;
  }

  setExpandedAll() {
    this.setState({ expanded: this.getNodeIds(nodes) });
  }
  closeExpandedAll() {
    this.setState({ expanded: [] });
  }

  render() {
    const { checked, expanded } = this.state;
    return (
      <>
        <button onClick={() => this.setExpandedAll()}>expand all</button>
        <button onClick={() => this.closeExpandedAll()}>close all</button>
        <CheckboxTree
          nodes={nodes}
          checked={checked}
          expanded={expanded}
          onExpand={(expanded) => this.setState({ expanded })}
        />
      </>
    );
  }
}

export default ExpandedTree;
