import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  modal: {
    //background: "#3f51b5",
    minWidth: "300px",
  },
}));

const DetailsModal = ({ setModalOpen, modalOpen, callDetails }) => {
  const classes = useStyles();
  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Dialog
        classes={{ paper: classes.modal }}
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Call Details"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Caller : {callDetails.caller_name}
            <br />
            Phone Number : {callDetails.phone}
            <br />
            Time : {callDetails.hours}
            <br />
            Duration : {callDetails.duration}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default DetailsModal;
