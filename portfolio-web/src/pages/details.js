// REACT
import React from "react";
import { useParams } from "react-router-dom";

// VAR
import PanelCard from "../shared/components/panel-card";

function Details() {

  let { id } = useParams();


  return (
    <React.Fragment>
      <div className="body body-details">        
        <PanelCard id={id}></PanelCard>
      </div>
    </React.Fragment>
  );
}

export default Details;