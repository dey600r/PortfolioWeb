// REACT
import React, { useState } from "react";

import { IconButton } from "@material-ui/core";
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import CodeIcon from '@mui/icons-material/Code';

// VAR
import gameEngineImage from '../../assets/images/GameEngine1.png';

function PanelCardTitle(props) {

  const [showDescription, setShowDescription] = useState(false);

  return (
    <React.Fragment>
      <div className="title-card">
        <div className="table-row">
          <IconButton aria-label="Code"><CodeIcon /></IconButton>
          <h2 className="all-row">Game Engines</h2>
          <IconButton aria-label="Code" onClick={() => {setShowDescription(!showDescription)}}>{showDescription ? <KeyboardArrowUp/> : <KeyboardArrowDown/>}</IconButton>
        </div>
        {
          !showDescription ? '' : <div className="title-card-description">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <img alt="im" className="image image-card-detail" src={gameEngineImage}/>
          </div>
        }
      </div>
    </React.Fragment>
  );
}

export default PanelCardTitle;