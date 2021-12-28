import React from "react";
// import { ExcelFile, ExcelSheet } from "react-export-excel";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
}));

const multiDataSet = [
  {
    columns: [
      { value: "Name", widthPx: 50 }, // width in pixels
      { value: "Salary", widthCh: 20 }, // width in charachters
      { value: "Sex", widthPx: 60, widthCh: 20 } // will check for width in pixels first
    ],
    data: [
      ["Johnson", 30000, "Male"],
      ["Monika", 355000, "Female"],
      ["Konstantina", 20000, "Female"],
      ["John", 250000, "Male"],
      ["Josef", 450500, "Male"]
    ]
  },
  {
    xSteps: 1, // Will start putting cell with 1 empty cell on left most
    ySteps: 5, //will put space of 5 rows,
    columns: ["Name", "Department"],
    data: [
      ["Johnson", "Finance"],
      ["Monika", "IT"],
      ["Konstantina", "IT Billing"],
      ["John", "HR"],
      ["Josef", "Testing"]
    ]
  }
];

export default function ExcelExport() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        {/* <ExcelFile element={<button>Download Data</button>}>
          <ExcelSheet dataSet={multiDataSet} name="Organization" />
        </ExcelFile> */}
      </Grid>
    </Grid>
  );
}
