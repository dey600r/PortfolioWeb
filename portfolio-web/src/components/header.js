import React, { useState } from "react";
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import IconButton from '@mui/material/IconButton';

import guitarIcon from '../assets/images/guitar-icon2.jpg';
import RightMenu from "./rightMenu";
import Constants from "../core/constants";

function Header() {
  let [openMenu, setOpenMenu] = useState(false);
  
  return (
    <React.Fragment>
      <RightMenu open={openMenu} onClickOutside={() => {setOpenMenu(false)}} />
      <div className="header header-color">
        <div className="table-row header-row">
          <Link to={Constants.routes.home}>
            <img alt="Icon" className="header-image-size" src={guitarIcon}/>  
          </Link>
          <h1 className="header-title">Sergi Drummer</h1>
          <IconButton IconButton color="inherit" onClick={() => {setOpenMenu(true)}}>
            <i className="material-icons icon">menu</i>
          </IconButton>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;