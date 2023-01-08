import React from "react";
import { Grid } from "@material-ui/core";
import "./NavStyles.css";
import Logo from "../../assets/company/Logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container">
      <Grid container>
        <Grid item xs={12} sm={12} md={7}>
       <Link to="/"><img className="company-logo" src={Logo} alt="Brain Analytics" /></Link>   
        </Grid>
        <Grid className="nav-btn-container" item xs={2} sm={2} md={1}>
        <Link to="/"><button className="nav-btn">Home</button></Link>  
        </Grid>
        <Grid className="nav-btn-container" item xs={2} sm={2} md={1}>
       <Link to="/About"> <button className="nav-btn">About</button></Link>  
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
