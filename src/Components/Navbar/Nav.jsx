import React from "react";
import { Grid } from "@material-ui/core";
import "./NavStyles.css";
import Logo from "../../assets/company/Logo.png";

const Nav = () => {
  return (
    <div className="nav-container">
      <Grid container>
        <Grid item xs={12} sm={12} md={7}>
          <img className="company-logo" src={Logo} alt="Brain Analytics" />
        </Grid>
        <Grid className="nav-btn-container" item xs={2} sm={2} md={1}>
          <button className="nav-btn">Home</button>
        </Grid>
        <Grid className="nav-btn-container" item xs={2} sm={2} md={1}>
          <button className="nav-btn">About</button>
        </Grid>
        <Grid className="nav-btn-container" item xs={2} sm={2} md={1}>
          <button className="nav-btn">Contact</button>
        </Grid>
        <Grid className="nav-btn-container" item xs={2} sm={2} md={1}>
          <button className="nav-btn">Services</button>
        </Grid>
        <Grid className="nav-btn-container" item xs={2} sm={2} md={1}>
          <button className="nav-btn">Blog</button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Nav;
