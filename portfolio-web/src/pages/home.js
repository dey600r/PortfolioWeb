// REACT
import React, {useState} from "react";
import { Link } from "react-router-dom";

// MATERIAL
import { Grid } from "@material-ui/core";

// COMPONENTS
import Constants from '../core/constants';

function Home() {
  const [showText, setShowResults] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  function eventMouseEnter(e) {
    setShowResults(true);
  }

  function eventMouseLeave(e) {
    setShowResults(false);
  }

  function eventClick(e) {
    setShowDescription(!showDescription);
  }

  return (
    <React.Fragment>
      <div className="body body-home">
        <div className="title-card-panel border">
          <h2 className="all-row title-card title-card-margin">Game Engines</h2>
        </div>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="position-card">
              <p className="text-card">Game Engine</p>
              <img alt="hola" className="image image-card border" src={Constants.paths.baseImages + 'GameEngine1Short.png'}/>
              <img alt="hola" className="image-button-down" src={Constants.paths.baseImages + 'icon-button-down-gray.png'} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="position-card">
              <p className="text-card">Game Engine</p>
              <img alt="hola" className="image image-card border" src={Constants.paths.baseImages + 'GameEngine1Short.png'}/>
              <img alt="hola" className="image-button-down" src={Constants.paths.baseImages + 'icon-button-down-gray.png'} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="position-card">
              <p className="text-card">Game Engine</p>
              <img alt="hola" className="image image-card border" src={Constants.paths.baseImages + 'GameEngine1Short.png'}/>
              <img alt="hola" className="image-button-down" src={Constants.paths.baseImages + 'icon-button-down-gray.png'} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="position-card">
              <p className="text-card">Game Engine</p>
              <img alt="hola" className="image image-card border" src={Constants.paths.baseImages + 'GameEngine1Short.png'}/>
              <img alt="hola" className="image-button-down" src={Constants.paths.baseImages + 'icon-button-down-gray.png'} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="position-card">
              <p className="text-card">Game Engine</p>
              <img alt="hola" className="image image-card border" src={Constants.paths.baseImages + 'GameEngine1Short.png'}/>
              <img alt="hola" className="image-button-down" src={Constants.paths.baseImages + 'icon-button-down-gray.png'} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="position-card">
              <p className="text-card">Game Engine</p>
              <img alt="hola" className="image image-card border" src={Constants.paths.baseImages + 'GameEngine1Short.png'}/>
              <img alt="hola" className="image-button-down" src={Constants.paths.baseImages + 'icon-button-down-gray.png'} />
            </div>
          </Grid>
        </Grid>
        <div className="table-row">
          <div className="position-card">
            <p className="text-card">Game Engine</p>
            <img alt="hola" className="image image-card border" src={Constants.paths.baseImages + 'GameEngine1Short.png'}/>
            <img alt="hola" className="image-button-down" src={Constants.paths.baseImages + 'icon-button-down-gray.png'} />
          </div>
          <div className="position-card">
            { showText ? <p id="div1" className="text-card">Game Engine</p> : null }
            <img alt="hola" className="image image-card border" src={Constants.paths.baseImages + 'GameEngine1Short.png'} onMouseEnter={eventMouseEnter} onMouseLeave={eventMouseLeave}/>
            <img alt="hola" className={'image-button-down' + (showText ? ' show-info' : ' hide-info')} src={Constants.paths.baseImages + 'icon-button-down-gray.png'} />
          </div>
          <div className="position-card">
            <p className={'text-card' + (showText ? ' show-info' : '')}>Game Engine</p>
            <img alt="hola" className="image image-card border" src={Constants.paths.baseImages + 'GameEngine1Short.png'} onMouseEnter={eventMouseEnter} onMouseLeave={eventMouseLeave} onClick={eventClick}/>
            <img alt="hola" className={'image-button-down' + (showText ? ' show-info' : '')} src={Constants.paths.baseImages + 'icon-button-down-gray.png'} onMouseEnter={eventMouseEnter} onMouseLeave={eventMouseLeave} onClick={eventClick} />
            <Link to={Constants.routes.details.replace(':id', 2)}><img alt="hola" className={'image-info' + (showText ? ' show-info' : '')} src={Constants.paths.baseImages + 'icon-info-gray.png'} onMouseEnter={eventMouseEnter} onMouseLeave={eventMouseLeave} /></Link>
          </div>
        </div>
        <div className="title-card-panel">
          <h2 className="all-row title-card title-card-margin">Games</h2>
        </div>
        <div className="table-row">
          <div className="position-card">
            <p className="text-card">Game Engine</p>
            <img alt="hola" className="image image-card border" src={Constants.paths.baseImages + 'GameEngine1Short.png'}/>
            <img alt="hola" className="image-button-down" src={Constants.paths.baseImages + 'icon-button-down-gray.png'} />
          </div>
          <div className="position-card">
            { showText ? <p id="div1" className="text-card">Game Engine</p> : null }
            <img alt="hola" className="image image-card border" src={Constants.paths.baseImages + 'GameEngine1Short.png'} onMouseEnter={eventMouseEnter} onMouseLeave={eventMouseLeave}/>
            <img alt="hola" className={'image-button-down' + (showText ? ' show-info' : ' hide-info')} src={Constants.paths.baseImages + 'icon-button-down-gray.png'} />
          </div>
        </div>
        <div className={'card-description' + (showDescription ? ' show-info' : '')}>
          <div className="table-row">
            <div>
              <h2>Game Engine</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <img alt="hola" className="image image-card-description" src={Constants.paths.baseImages + 'GameEngine1.png'}/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;