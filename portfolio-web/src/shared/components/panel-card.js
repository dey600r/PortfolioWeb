// REACT
import React from "react";

//MATERIAL
import { Grid } from "@material-ui/core";

// COMPONENTS
import PanelCardDescription from "./panel-card-description";
import PanelCardImage from "./panel-card-image";
import PanelCardTitle from "./panel-card-title";

function PanelCard(props) {

  const todos = [1,2,3];

  return (
    <React.Fragment>
      <PanelCardTitle/>
      {
        todos.map((todo, index) => (
          <div className="card-panel">
            <Grid container spacing={0}>
              { index%2=== 0 ? <Grid item xs={12} sm={6} md={7} lg={8}>
                <PanelCardDescription id={props.id}/>
              </Grid> : '' }
              <Grid item xs={12} sm={6} md={5} lg={4} className="box-image-card-detail">
                <PanelCardImage/>
              </Grid>
              { index%2=== 1 ? <Grid item xs={12} sm={6} md={7} lg={8}>
                <PanelCardDescription id={props.id}/>
              </Grid> : '' }
            </Grid>
          </div>
        ))
      }
    </React.Fragment>
  );
}

export default PanelCard;