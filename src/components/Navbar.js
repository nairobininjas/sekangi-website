import React from "react";
import Logo from "../assets/sekangi-logo.PNG";

import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
    alignItems: "center",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: "16px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "#008037",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      position="static"
      className="header-links"
      style={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <CssBaseline />
      <Toolbar className="toolbar">
        <Link to="/" className="logo-section">
          <img src={Logo} alt="logo" />
          <h1>Sekangi Computers</h1>
        </Link>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link
              to="/shop"
              className={classes.link}
              style={{ marginBottom: 0 }}
            >
              Shop
            </Link>
            <Link to="/aboutus" className={classes.link}>
              About us
            </Link>
            <Link to="/contactus" className={classes.link}>
              Contact us
            </Link>
            <Link to="/shop" className={classes.link}>
              <button>Explore</button>
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
