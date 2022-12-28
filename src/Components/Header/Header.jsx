import React from "react";
import "./HeaderStyles.css";
import { Grid } from "@material-ui/core";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header-container">
      <Grid container>
        <Grid item xs={12} sm={12} md={9}>
          <p className="header-contact">
            <FaPhoneSquareAlt className="header-icons" />
            <span>+92-41-8787246</span>
            &nbsp; &nbsp;
            <AiFillMail className="header-icons" />
            <span>info@brainanalytics.pk</span>
          </p>
        </Grid>
        <Grid item xs={3} sm={2} md={1}>
          <button className="header-tabs">Enquiry</button>
        </Grid>
        <Grid item xs={3} sm={2} md={1}>
          <button className="header-tabs">Courses</button>
        </Grid>
        <Grid item xs={3} sm={2} md={1}>
          <button className="header-tabs">Admissions</button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
