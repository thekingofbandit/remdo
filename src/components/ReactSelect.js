import React from "react";
import _ from "lodash";
import Select from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();

const options = [
  { value: "plant1-unit1-equipment1-param1", label: "Chocolate" },
  { value: "plant2-unit2-equipment2-param2", label: "Strawberry" },
  { value: "plantx3-unit3-equipment3-param3", label: "Vanilla" }
];

const ReactSelect = (e) => {
  const [state, setState] = React.useState([]);

  const test = (label) => {
    const a = [
      { id: 1, label: "UNIT" },
      { id: 2, label: "BOILER" },
      { id: 3, label: "STEAM TURBINE" },
      { id: 4, label: "CONDENSER" },
      { id: 5, label: "AIR HEATER" },
      { id: 6, label: "HPH" },
      { id: 7, label: "LPH" }
    ];

    let index1 = _.findIndex(a, { label: label });
    console.log(index1);
    console.log(a[index1]);

    // const tv = [{ id: 1 }, { id: 2 }];
    // const voteID = 1;
    // let index = _.findIndex(tv, { id: voteID });
    // console.log(index);
  };

  const extract = (e) => {
    console.log(e);

    let plantId = [];
    let unitId = [];
    let equipmentId = [];
    let parameterId = [];
    if (e) {
      e.forEach((i) => {
        let data = i.value.split("-");
        plantId.push(data[0]);
        unitId.push(data[1]);
        equipmentId.push(data[2]);
        parameterId.push(data[3]);
      });

      setState({
        plantId,
        unitId,
        equipmentId,
        parameterId
      });
    }
    setState({
      plantId,
      unitId,
      equipmentId,
      parameterId
    });
  };

const replacer = (id,value) =>{
  let elms = document.querySelectorAll(`[id='${id}']`);
  // console.log(elms)

  for(var i = 0; i < elms.length; i++) 
    elms[i].textContent=value;
}

  return (
    <>
      <button onClick={() => test('STEAM TURBINE')}>test</button>
      <button onClick={() => replacer('91-1-300','1000 kCal')}>replacer</button>
      {JSON.stringify(state)}

  <div id="91-1-300">halo</div>
  <div id="91-1-300">halo</div>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[options[0]]}
        isMulti
        options={options}
        onChange={(e) => {
          extract(e);
        }}
      />
    </>
  );
};

export default ReactSelect;
