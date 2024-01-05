import React, { useEffect, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import ArchiveIcon from "@material-ui/icons/Archive";
import { makeStyles } from "@material-ui/core/styles";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import PhoneMissedIcon from "@material-ui/icons/PhoneMissed";
import callData from "../../services/callRecord";
import { Button, Chip, Paper, Snackbar } from "@material-ui/core";
import PhoneCallbackIcon from "@material-ui/icons/PhoneCallback";
import PhoneForwardedIcon from "@material-ui/icons/PhoneForwarded";
import { Close, Info } from "@material-ui/icons";
import DetailsModal from "../utils/DetailsModal.jsx";
import Alert from "../utils/Alert.jsx";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
    marginLeft: "35%",
    fontFamily: "Arial",
    color: "grey",
  },
}));
const Activity = () => {
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [archiveMessage, setArchiveMessage] = useState("");
  const [callDetails, setCallDetails] = useState({});
  const handleAllArchive = () => {
    callData.map((call) => {
      call.record.map((record) => {
        record.archived = true;
      });
    });
    setArchiveMessage("All Calls Archived");
    setAlertOpen(true);
  };
  const classes = useStyles();
  return (
    <div style={{ overflow: "auto", maxHeight: "80%" }}>
      <div
        style={{ position: "sticky", top: "0", width: "100%", zIndex: "200" }}
      >
        <Button
          style={{ width: "100%" }}
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<ArchiveIcon />}
          onClick={handleAllArchive}
        >
          Archive all calls
        </Button>
      </div>
      {callData.map((call) => (
        <Grid item xs={12}>
          <Chip label={call.date} className={classes.title} />
          <div className={classes.demo}>
            <Paper>
              <List>
                {call.record.filter((x) => x.archived === false).length ===
                0 ? (
                  <div style={{ marginLeft: "24%" }}>
                    This day has archived calls.
                  </div>
                ) : (
                  call.record.map(
                    (record) =>
                      !record.archived && (
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar>
                              {record.type === "recieve" ? (
                                <PhoneCallbackIcon />
                              ) : record.type === "called" ? (
                                <PhoneForwardedIcon />
                              ) : (
                                <PhoneMissedIcon />
                              )}
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={record.phone}
                            secondary={record.hours}
                          />
                          <ListItemSecondaryAction>
                            <IconButton
                              edge="end"
                              aria-label="delete"
                              onClick={() => {
                                setCallDetails(record);
                                setModalOpen(true);
                              }}
                            >
                              <Info />
                            </IconButton>
                            <IconButton
                              edge="end"
                              aria-label="archive"
                              onClick={() => {
                                record.archived = true;
                                setArchiveMessage("Call Archived");
                                setAlertOpen(true);
                              }}
                            >
                              <ArchiveIcon />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </ListItem>
                      )
                  )
                )}
              </List>
            </Paper>
          </div>
        </Grid>
      ))}
      <Alert
        open={alertOpen}
        setOpen={setAlertOpen}
        archiveMessage={archiveMessage}
      />
      <DetailsModal
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
        callDetails={callDetails}
      />
    </div>
  );
};
export default Activity;
