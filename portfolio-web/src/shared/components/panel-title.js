// REACT
import React, { useState } from "react";

// MATERIAL
import { IconButton } from "@material-ui/core";
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import SourceIcon from '@mui/icons-material/Source';

// COMPONENTS
import Constants from "../../core/constants";

function PanelCardTitle(props) {

  const [showDescription, setShowDescription] = useState(false);

  return (
    <React.Fragment>
      <div className="title-card-panel border">
        <div className="table-row">
          <a href={props.url} target="_blank" rel="noreferrer">
            <IconButton aria-label="Code"><SourceIcon /></IconButton>
          </a>
          <h2 className="all-row title-card">{props.title}</h2>
          <IconButton aria-label="Code" onClick={() => {setShowDescription(!showDescription)}}>{showDescription ? <KeyboardArrowUp/> : <KeyboardArrowDown/>}</IconButton>
        </div>
        {
          !showDescription ? '' : <div className="title-card-description">
            <p>{props.description}</p>
            <img alt={props.img} className="image image-card-detail" src={Constants.paths.baseImages + props.img}/>
          </div>
        }
      </div>
    </React.Fragment>
  );
}

export default PanelCardTitle;