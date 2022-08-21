// REACT
import React from "react";
import { Link } from "react-router-dom";


// MATERIAL
import {
  Drawer, List, ListItem, Typography
} from '@material-ui/core';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

// COMPOENTS
import Constants from "../../core/constants";

function SideMenu(props) {

  const [open, setOpen] = React.useState([]);
  const [dataProjects , setData] = React.useState([]);
  
  const getDataProjects=()=>{
    fetch(Constants.paths.baseData + Constants.var.projectsJson).then(res => {
      return res.json();
    }).then(data => {
      const projects = data.projects;
      setData(projects);
      setOpen(projects.map(() => true));
    }).catch(err => {
        console.log(err, 'ERROR: Loading data on details')
    })
  }

  React.useEffect(()=>{
    if(dataProjects.length == 0) {
      getDataProjects();
    }
  }, [])
  
  const handleClick = (index) => {
    let openAux = [...open];
    openAux[index] = !openAux[index];
    setOpen(openAux);
  };
  const closeLeftMenu = () => {
    props.onClickOutside();
  };

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  return (
    <React.Fragment>
      <Drawer open={props.open} onClose={closeLeftMenu} anchor="right">
        <DrawerHeader className="header-color">
          {/* <Typography>Menu</Typography> */}
          <IconButton onClick={closeLeftMenu}>
            <i className="material-icons header-color">close</i>
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div className="menu">
          <List>
            <ListItemButton component={Link} to={Constants.routes.home}>
              <i className="material-icons menu-item">home</i>
              <ListItemText className="menu-item" primary="Home"></ListItemText>
            </ListItemButton>
            <Divider />
            {
              dataProjects == null ? '' : dataProjects.filter(item => item.details && item.details.length > 0).map((project, index) =>
                <React.Fragment key={project.id}>
                  <ListItemButton onClick={() => handleClick(index)}>
                    <ListItemIcon>
                      <i className="material-icons menu-item">{project.icon}</i>
                    </ListItemIcon>
                    <ListItemText className="menu-item" primary={project.title} />
                    {open[index] ? <ExpandLess className="menu-item" /> : <ExpandMore className="menu-item"/>}
                  </ListItemButton>
                  <Collapse in={open[index]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {
                        project.details.map(detail => (
                          <ListItemButton key={detail.id} sx={{ pl: 4 }} component={Link}  onClick={closeLeftMenu}
                            to={Constants.routes.details.replace(`:${Constants.routesParam.idProject}`, project.id).replace(`:${Constants.routesParam.idDetail}`, detail.id)}>
                            <i className="material-icons menu-item">{detail.icon}</i>
                            <ListItemText className="menu-item" primary={detail.title} />
                          </ListItemButton>
                        ))
                      }
                    </List>
                  </Collapse>
                </React.Fragment>
              )
            }
          </List>
        </div>
      </Drawer>
    </React.Fragment>
  );
}

export default SideMenu;