import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const AlertDialogSlide =({ open, handleClose, handleConfirm, message })=> {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{
        '& .MuiDialogTitle-root': {
          backgroundColor: '#1976d2',
          color: 'white',
        },
        '& .MuiDialogContent-root': {
          backgroundColor: '#e3f2fd',
        },
        '& .MuiButton-root': {
          '&:first-of-type': {
            color: '#1976d2',
          },
          '&:last-of-type': {
            color: 'white',
            backgroundColor: '#d32f2f',
            '&:hover': {
              backgroundColor: '#9a0007',
            },
          },
        },
      }}
    >
      <DialogTitle>{"Please Confirm Deletion"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleConfirm}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
}



AlertDialogSlide.propTypes = {
  open: PropTypes.bool.isRequired, 
  handleClose: PropTypes.func.isRequired, 
  handleConfirm: PropTypes.func.isRequired, 
  message: PropTypes.func.isRequired, 
};

export default AlertDialogSlide;