import React from "react";
import { Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";

import gameEngineImage from '../assets/images/GameEngine1.png';

function Details() {

  let { id } = useParams();


  return (
    <React.Fragment>
      <div className="body body-details">
        {/* <div className="table-row">
          <div className="card-dark">
            <h1>Game Engine</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className="card-white">
            <img alt="im" className="image" src={gameEngineImage}/>
          </div>
        </div>
        <div className="table-row">
          <div className="card-white">
            <img alt="im" className="image" src={gameEngineImage}/>
          </div>
          <div className="card-dark">
            <h1>Game Engine {id}</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div> */}
        
        <div className="card-panel">
          <Grid container spacing={0}>
            <Grid item xs={12} md={7}>
              <div className="card-dark">
                <h1>Game Engine {id}</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
              <div className="card-white">
                <img alt="im" className="image" src={gameEngineImage}/>
              </div>
            </Grid>
          </Grid>
        </div>
        <div class="card-panel">
          <Grid container spacing={0}>
            <Grid item xs={12} md={5}>
              <div className="card-white">
                <img alt="im" className="image" src={gameEngineImage}/>
              </div>
            </Grid>
            <Grid item xs={12} md={7}>
              <div className="card-dark">
                <h1>Game Engine  {id}</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Details;