import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AlbumOutlinedIcon from "@material-ui/icons/AlbumOutlined";
import CallIcon from "@material-ui/icons/Call";
import PersonIcon from "@material-ui/icons/Person";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import DialpadOutlinedIcon from "@material-ui/icons/DialpadOutlined";
import { Badge } from "@material-ui/core";
import { Archive } from "@material-ui/icons";
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});
const Footer = ({ setValue, value }) => {
  const classes = useStyles();

  console.log("this is value", value);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [missed, setMissed] = useState(5);
  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={
          <Badge color="primary" badgeContent={missed}>
            <CallIcon />
          </Badge>
        }
      />
      <BottomNavigationAction
        label="Dialpad"
        value="dialpad"
        icon={<DialpadOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<PersonIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<SettingsOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Archived"
        value="archived"
        icon={<Archive />}
      />
    </BottomNavigation>
  );
};
export default Footer;
