import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const MessageDialog = ({ open, handleClose, message }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="message-dialog-title"
      aria-describedby="message-dialog-description"
      sx={{
        '& .MuiDialogTitle-root': {
          backgroundColor: '#1976d2', 
          color: 'white', 
        },
        '& .MuiDialogContent-root': {
          backgroundColor: '#e3f2fd', 
        },
        '& .MuiButton-root': {
          color: '#1976d2', 
        },
      }}
    >
      <DialogTitle id="message-dialog-title">Dear User!</DialogTitle>
      <DialogContent>
        <DialogContentText id="message-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

MessageDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default MessageDialog;