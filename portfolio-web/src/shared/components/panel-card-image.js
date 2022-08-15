// REACT
import React from "react";

// VAR
import gameEngineImage from '../../assets/images/GameEngine1.png';

function PanelCardImage(props) {

  return (
    <React.Fragment>
      <div className="card-white">
        <img alt="im" className="image image-card-detail" src={gameEngineImage}/>
      </div>
    </React.Fragment>
  );
}

export default PanelCardImage;