// REACT
import React from "react";

//MATERIAL
import { Grid } from "@material-ui/core";

// COMPONENTS
import PanelCardDescription from "./panel-card-description";
import PanelCardImage from "./panel-card-image";

function PanelCard(props) {

  const dataDetail = props.data;

  return (
    <React.Fragment>
      <div className="card-panel">
        <Grid container spacing={0}>
          { dataDetail.id%2=== 0 ? <Grid item xs={12} sm={6} md={7} lg={8}>
            <PanelCardDescription data={dataDetail}/>
          </Grid> : '' }
          <Grid item xs={12} sm={6} md={5} lg={4} className="box-image-card-detail">
            <PanelCardImage data={dataDetail}/>
          </Grid>
          { dataDetail.id%2=== 1 ? <Grid item xs={12} sm={6} md={7} lg={8}>
            <PanelCardDescription data={dataDetail}/>
          </Grid> : '' }
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default PanelCard;