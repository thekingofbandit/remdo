import React from "react";
import _ from 'lodash';
import cloneDeep from 'lodash/cloneDeep';
import faker from 'faker';
import { Form, Grid, Segment, Button } from "semantic-ui-react";
// import the react-json-view component
import ReactJson from 'react-json-view'

// import "./styles.css";

const a = _.times(100, () => ({
  id: faker.random.uuid(),
  name: faker.hacker.noun(),
}))

const b = cloneDeep(a);

const source_a = a.map((data, i) => {
  return {name:data.name,value:data.name,show:false,displayValue:data.name}
});

const source_b = b.map((data, i) => {
  return {name:data.name,value:data.name,show:true,displayValue:data.name}
});



export class CheckboxSUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsArray: [],
      values: [],
    };
  }

  componentDidMount() {
    this.setState({
      optionsArray: source_a,
    });
  }


  //clear all checked and restore initial value
  handleClearChecked = () =>{
    const source = a.map((data, i) => {
      return {name:data.name,value:data.name,show:false,displayValue:data.name}
    });
    this.setState({optionsArray:[],values:[]});

    setTimeout(() => {
      
      return this.setState({optionsArray:source});
    }, 300);

  }
  //clear all checked and restore initial value
  handleCheckAll= () =>{
    this.setState({optionsArray:[],values:[]});
    const source = a.map((data, i) => {
      return {name:data.name,value:data.name,show:true,displayValue:data.name}
    });
    const values = a.map((data, i) => {
      return data.name
    });

    setTimeout(() => {
      
      return this.setState({optionsArray:source, values});
    }, 300);

  }





  handleItemClick = (event, data, i) => {
    const { optionsArray } = this.state;
    optionsArray[i].show = !optionsArray[i].show;
    let val=[];
    const result = optionsArray
    .filter(e => e.show === true)
    // .map(e => console.log(e.value))
    .map(e => val.push(e.value));
    console.log(val);
    this.setState({
      optionsArray,
      values:val,
    }
    ); 
  };

  render() {
    // console.log(this.state.optionsArray);
    // const ck = (this.state.optionsArray).filter((item) => item.show);
  //   const fil = (this.state.optionsArray).forEach((i) => {
  //     console.log(i.show);
  // });


 
  const { optionsArray } = this.state;
    return (
      <>
      <Grid columns='equal'>
        <Grid.Column>

        <Segment style={{ overflow: 'auto', maxHeight: '50vh' }}>
          <div>

          Checked: {this.state.values.length}
          </div>
          <div>
          Values: {this.state.values}
          </div>
<Button onClick={()=>this.handleClearChecked()}>Clear</Button>
<Button onClick={()=>this.handleCheckAll()}>Check All</Button>
          {optionsArray.map((item, i) => (
            <div key={i}>
              <Form.Checkbox
                name={item.name}
                onChange={(e, v) => this.handleItemClick(e, v, i)}
                value={item.show}
                defaultChecked={item.show}
                label={item.displayValue}
              />
            </div>
          ))}
        </Segment>
        </Grid.Column>
        <Grid.Column>
        <Segment style={{ overflow: 'auto', maxHeight: '50vh' }} inverted>
<pre  style={{
            fontSize: ".85rem",
            padding: ".25rem .5rem",
            overflowX: "auto"
          }}>
            <ReactJson src={this.state.values} theme='google' />
  {/* {JSON.stringify(this.state.values,null,2)} */}
  {/* {JSON.stringify(ck,null,2)} */}
  {/* {JSON.stringify(this.state.optionsArray,null,2)} */}
</pre>
</Segment>
        </Grid.Column>
        </Grid>
      


       
      </>
    );
  }
}
