// REACT
import React from "react";
import { Link } from 'react-router-dom';

// MATERIAL
import { IconButton } from '@material-ui/core';

// COMPONENTS
import SideMenu from "./sideMenu";
import Constants from "../../core/constants";

function Header() {
  let [openMenu, setOpenMenu] = React.useState(false);
  const [dataHeader , setDataHeader] = React.useState();
  
  const getDataHeader = () => {
    fetch(Constants.paths.baseData + Constants.var.headerJson).then(res => {
      return res.json();
    }).then(data => {
      setDataHeader(data.header);
    }).catch(err => {
        console.log(err, 'ERROR: Loading data on header');
    })
  }  

  React.useEffect(()=>{
    if(dataHeader == null) {
      getDataHeader();
    }
  }, [])
  
  return (
    <React.Fragment>
      <SideMenu open={openMenu} onClickOutside={() => {setOpenMenu(false)}} />
      { dataHeader == null ? '' : 
      <div className="header header-color">
        <div className="table-row header-row">
          <Link to={Constants.routes.home}>
            <img alt="Icon" className="header-image-size" src={Constants.paths.baseImages + dataHeader.image}/>  
          </Link>
          <div className="all-row">
            <h2 className="header-title">{dataHeader.title}</h2>
            <p className="header-subtitle">{dataHeader.subtitle}</p>
          </div>
          <IconButton IconButton className="header-button-menu" color="inherit" onClick={() => {setOpenMenu(true)}}>
            <i className="material-icons icon">menu</i>
          </IconButton>
        </div>
      </div>}
    </React.Fragment>
  );
}

export default Header;