// REACT
import React from "react";

// COMPONENTS
import Constants from "../../core/constants";

function PanelCardImage(props) {

  const dataDetail = props.data;

  return (
    <React.Fragment>
      <div className="card-white">
        <img alt={dataDetail.title} className="image image-card-detail" src={Constants.var.baseImages + dataDetail.img}/>
      </div>
    </React.Fragment>
  );
}

export default PanelCardImage;