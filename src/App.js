import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Grid, Segment, Menu, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./assets/css/style.css";
import Dashboard from "./components/Dashboard";
import { BarChart } from "./components/BarChart";
import { DualAxisChart } from "./components/DualAxisChart";
import { MultiSeries } from "./components/MultiSeries";
import { TimseriesFushionChart } from "./components/TimseriesFushionChart";
import { CheckboxExample } from "./components/CheckboxExample";
import { CheckboxSUI } from "./components/CheckboxSUI";
import Treegator from "./components/Treegator";
import ExpandedTree from "./components/ExpandedTree";
import ReactSelect from "./components/ReactSelect";
import ScatterChart from "./components/ScatterChart";
import CharTimeDualAxis from "./components/ChartTimeDualAxis";
import MultivariateChart from "./components/MultivariateChart";
import Gojs from "./components/Gojs";
import InlineSvg from "./components/InlineSvg";
import ExcelExport from "./components/ExcelExport";
import HtmlEditor from "./components/HtmlEditor";
import TinyMCE from "./components/TinyMCE";

function App() {
  return (
    <Router>
      <Grid width={16} padded>
        <Grid.Row className="h-10">
          <Menu className={"scroll-vertical"} secondary>
            <Menu.Item>
              <Link to="/TinyMCE">
                <Button primary inverted>
                  TinyMCE
                </Button>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/HtmlEditor">
                <Button primary inverted>
                  HtmlEditor
                </Button>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/ExcelExport">
                <Button primary inverted>
                  ExcelExport
                </Button>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/InlineSvg">
                <Button primary inverted>
                  InlineSvg
                </Button>
              </Link>
            </Menu.Item>

            <Menu.Item>
              <Link to="/MultivariateChart">
                <Button primary inverted>
                  MultivariateChart
                </Button>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/GoJs">
                <Button primary inverted>
                  GoJS
                </Button>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/CharTimeDualAxis">
                <Button primary inverted>
                  Char Time Dual Y-Axis
                </Button>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/Scatter-Chart">
                <Button primary inverted>
                  Scatter Chart
                </Button>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/Simple-Bar-Chart">
                <Button primary inverted>
                  Bar Chart
                </Button>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/Dual-Axis-Chart">
                <Button secondary inverted>
                  Dual Axis
                </Button>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/Multiple-Line-Chart">
                <Button color="red" inverted>
                  Multiple Series
                </Button>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/Time-Series-Chart">
                <Button color="green" inverted>
                  Time Series Chart
                </Button>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/Checkbox-Example">
                <Button color="green" inverted>
                  Checkbox Formic
                </Button>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/CheckboxSUI">
                <Button color="green" inverted>
                  Checkbox SUI
                </Button>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/Dashboard">
                <Button color="green" inverted>
                  Dashboard
                </Button>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/Treegator">
                <Button color="green" inverted>
                  Treegator
                </Button>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/ExpandedTree">
                <Button color="green" inverted>
                  ExpandedTree
                </Button>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/ReactSelect">
                <Button color="green" inverted>
                  React Select
                </Button>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Button disabled inverted>
                Coming Soon
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button disabled inverted>
                Coming Soon
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button disabled inverted>
                Coming Soon
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button disabled inverted>
                Coming Soon
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button disabled inverted>
                Coming Soon
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button disabled inverted>
                Coming Soon
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button disabled inverted>
                Coming Soon
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button disabled inverted>
                Coming Soon
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button disabled inverted>
                Coming Soon
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button disabled inverted>
                Coming Soon
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button disabled inverted>
                Coming Soon
              </Button>
            </Menu.Item>
          </Menu>
        </Grid.Row>
        {/* <Grid.Row >
          <Grid.Column>
            <Segment> */}
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        {/* </Segment>
          </Grid.Column>
        </Grid.Row> */}
      </Grid>
      <Switch>
        <Route exact path="/TinyMCE">
          <TinyMCE />
        </Route>
        <Route exact path="/HtmlEditor">
          <HtmlEditor />
        </Route>
        <Route exact path="/ExcelExport">
          <ExcelExport />
        </Route>
        <Route exact path="/InlineSvg">
          <InlineSvg />
        </Route>

        <Route exact path="/MultivariateChart">
          <MultivariateChart />
        </Route>
        <Route exact path="/Gojs">
          <Gojs />
        </Route>
        <Route exact path="/CharTimeDualAxis">
          <CharTimeDualAxis />
        </Route>
        <Route exact path="/Scatter-Chart">
          <ScatterChart />
        </Route>
        <Route exact path="/Dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/Simple-Bar-Chart">
          <Segment className="h-80">
            <BarChart />
          </Segment>
        </Route>
        <Route path="/Dual-Axis-Chart">
          <Segment className="h-80">
            <DualAxisChart />
          </Segment>
        </Route>
        <Route path="/Multiple-Line-Chart">
          <Segment className="h-80">
            <MultiSeries />
          </Segment>
        </Route>
        <Route path="/Time-Series-Chart">
          <Segment className="h-80">
            <TimseriesFushionChart />
          </Segment>
        </Route>
        <Route path="/Checkbox-Example">
          <Segment>
            <CheckboxExample />
          </Segment>
        </Route>
        <Route path="/CheckboxSUI">
          <Segment>
            <CheckboxSUI />
          </Segment>
        </Route>
        <Route path="/Treegator">
          <Segment>
            <Treegator />
          </Segment>
        </Route>
        <Route path="/ExpandedTree">
          <Segment>
            <ExpandedTree />
          </Segment>
        </Route>
        <Route path="/ReactSelect">
          <Segment>
            <ReactSelect />
          </Segment>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
