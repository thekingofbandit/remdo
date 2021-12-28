import React from "react";
import { ReactSVGPanZoom } from "react-svg-pan-zoom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Diagram from "../components/Diagram";
const svgPanZoom = require("svg-pan-zoom");

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

export default function InlineSvg() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const activateZoom = () => {
    svgPanZoom("#svg2008", {
      viewportSelector: ".svg-pan-zoom_viewport"
    });
  };
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <button onClick={activateZoom}>onClick</button>
      </Grid>
      <Grid item xs={8}>
        <Grid container justify="center" spacing={spacing}>
          <Diagram
            url={`https://res.cloudinary.com/tkob/image/upload/v1612628097/UNIT.svg`}
            // uniqueHash={i.title}
            uniquifyIDs={"demo-tiger"}
            // data={diagrams.data}
            alt="img-icon"
            className={"w-full"}
            action={() => console.log("data")}
            onError={(error) => console.log(error)}
            onLoad={(src, hasCache) => console.log(src, hasCache)}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
