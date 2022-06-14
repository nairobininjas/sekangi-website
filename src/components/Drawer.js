import React, { useState } from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: "16px",
  },
  icon: {
    color: "#333",
    fontSize: "2px",
  },
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={classes.link}>
                Home
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/shop" className={classes.link}>
                Shop
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/aboutus" className={classes.link}>
                About us
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contactus" className={classes.link}>
                Contact us
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={(classes.icon, "svg-icon")}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
