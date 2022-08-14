// REACT
import React from "react";
import { Link } from "react-router-dom";

// MATERIAL
import {
  Drawer, List, ListItem, ListItemText, Typography
} from '@material-ui/core';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

// COMPOENTS
import Constants from "../../core/constants";

function SideMenu(props) {
  
  const closeLeftMenu = () => {
    props.onClickOutside();
  };

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  return (
    <Drawer open={props.open} onClose={closeLeftMenu} anchor="right">
      <DrawerHeader className="header-color">
        <Typography>Menu</Typography>
        <IconButton onClick={closeLeftMenu}>
          <i className="material-icons header-color">close</i>
        </IconButton>
      </DrawerHeader>
      <Divider />
      <div className="menu" onKeyDown={closeLeftMenu} onClick={closeLeftMenu}>
        <List>
          <ListItem component={Link} button to={Constants.routes.home}>
            <i className="material-icons menu-item">home</i>
            <ListItemText className="menu-item" primary="Home"></ListItemText>
          </ListItem>
          <ListItem component={Link} button to={Constants.routes.details.replace(':id', 1)}>
            <i className="material-icons menu-item">psychology_alt</i>
            <ListItemText className="menu-item" primary="Game Engine 1"></ListItemText>
          </ListItem>
          <ListItem component={Link} button to={Constants.routes.details.replace(':id', 2)}>
            <i className="material-icons menu-item">psychology_alt</i>
            <ListItemText className="menu-item" primary="Game Engine 2"></ListItemText>
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}

export default SideMenu;