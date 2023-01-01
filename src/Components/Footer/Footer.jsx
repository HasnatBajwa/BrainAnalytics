import React from "react";
import "./FooterStyles.css";
import { Grid } from "@material-ui/core";

const Footer = () => {
  return (
    <>
    <div className="footer-container">
      <Grid container>
        <Grid item xs={12} sm={12} md={4}>
          <h1 className="footer-address">Address</h1>
          <h2 className="footer-address-heading">Head Office</h2>
          <p className="footer-address-txt">
            Office-18 <b>Brain Analytics Building</b> Street-9, Hassan Block,
            Khayaban Gardens, Sargodah Road, Faisalabad.
          </p>
          <p className="footer-address-contact">
            Ph: +92-41-878-7246 <br />
            Mob:+92-325-272-4646 <br />
            info@brainanalytics.pk
            
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={3}></Grid>
      </Grid>
    </div>
    <div className="footer-copyright">
        <p className="copyright-text"> COPYRIGHT &copy; 2023 <span className="brain">Brain Analytics. </span> All Rights Reserved </p>
      </div>
    </>
  );
};

export default Footer;
