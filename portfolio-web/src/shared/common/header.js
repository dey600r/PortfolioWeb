// REACT
import React, { useState } from "react";
import { Link } from 'react-router-dom';

// MATERIAL
import { IconButton } from '@material-ui/core';
// import IconButton from '@mui/material/IconButton';

// COMPONENTS
import SideMenu from "./sideMenu";
import Constants from "../../core/constants";

// VAR
import guitarIcon from '../../assets/images/guitar-icon2.jpg';

function Header() {
  let [openMenu, setOpenMenu] = useState(false);
  
  return (
    <React.Fragment>
      <SideMenu open={openMenu} onClickOutside={() => {setOpenMenu(false)}} />
      <div className="header header-color">
        <div className="table-row header-row">
          <Link to={Constants.routes.home}>
            <img alt="Icon" className="header-image-size" src={guitarIcon}/>  
          </Link>
          <div className="all-row">
            <h2 className="header-title">Sergi Drummer</h2>
            <p className="header-subtitle">Videogame Development Engineer</p> 
          </div>
          <IconButton IconButton className="header-button-menu" color="inherit" onClick={() => {setOpenMenu(true)}}>
            <i className="material-icons icon">menu</i>
          </IconButton>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;