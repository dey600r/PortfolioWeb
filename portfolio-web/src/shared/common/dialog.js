// REACT
import * as React from 'react';
import PropTypes from 'prop-types';

// MATEIRAL
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

// LIBRARIES
import { CodeBlock } from '@atlaskit/code';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      <div className="table-row">
        <h3 className="title-header-dialog all-row">{children}</h3>
        {onClose ? (
          <IconButton aria-label="close" className="button-color-header" onClick={onClose}><CloseIcon /></IconButton>
        ) : null}
      </div>
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {

  const closeDialog = () => {
    props.onClickOutside();
  };

  return (
    <div>
      <BootstrapDialog maxWidth={'lg'} onClose={closeDialog} aria-labelledby="customized-dialog-title" open={props.open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={closeDialog}
          className="header-color text-center">{props.title}</BootstrapDialogTitle>
          <CodeBlock className="body-dialog" language="jsx" showLineNumbers={false} text={props.code} />
      </BootstrapDialog>
    </div>
  );
}
