import { IconButton, Snackbar, makeStyles } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
const useStyles = makeStyles((theme) => ({
  snack: {
    background: "#3f51b5",
  },
}));
const Alert = ({ open, setOpen, archiveMessage }) => {
  const classes = useStyles();
  return (
    <Snackbar
      ContentProps={{
        classes: {
          root: classes.snack,
        },
      }}
      open={open}
      autoHideDuration={3000}
      onClose={() => setOpen(false)}
      message={archiveMessage}
      action={
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => setOpen(false)}
          >
            <Close fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    />
  );
};

export default Alert;
