// REACT
import React from "react";

// MATERIAL
import { IconButton } from "@material-ui/core";
import CodeIcon from '@mui/icons-material/Code';
import SourceIcon from '@mui/icons-material/Source';

// COMPONENTS
import CustomizedDialogs from "../common/dialog";

function PanelCardDescription(props) {

  let [openDialog, setOpenDialog] = React.useState(false);

  const dataDetail = props.data;

  return (
    <React.Fragment>
      <CustomizedDialogs 
        open={openDialog} 
        title={dataDetail.title}
        code={dataDetail.code}
        onClickOutside={() => {setOpenDialog(false)}}/>
      <div className="card-dark border">
        <h2 className="title-card">{dataDetail.title}</h2>
        <p>{dataDetail.description}</p>
        <div>
          {
            dataDetail.code ? 
            <IconButton aria-label="Code" onClick={() => setOpenDialog(true)}><CodeIcon /></IconButton> : ''
          }
          { 
            dataDetail.urlRepository ? 
            <a href={dataDetail.urlRepository} target="_blank" rel="noreferrer">
              <IconButton aria-label="Repository"><SourceIcon /></IconButton> 
            </a> : ''
          }
        </div>
      </div>
    </React.Fragment>
  );
}

export default PanelCardDescription;