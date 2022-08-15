// REACT
import React from "react";

// MATERIAL
import { IconButton } from "@material-ui/core";
import CodeIcon from '@mui/icons-material/Code';
import SourceIcon from '@mui/icons-material/Source';

function PanelCardDescription(props) {

  return (
    <React.Fragment>
      <div className="card-dark">
        <h2>Game Engine {props.id}</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div>
          <IconButton aria-label="Code"><CodeIcon /></IconButton>
          <IconButton aria-label="Repository"><SourceIcon /></IconButton>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PanelCardDescription;