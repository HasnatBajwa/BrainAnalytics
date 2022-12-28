import React from "react";
import "./TaglineStyles.css";
import { Grid } from "@material-ui/core";
import Trainings from "../../assets/company/Trainings.png";
import Partners from "../../assets/company/Partners.png";

const Tagline = () => {
  return (
    <div className="tagline-container">
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <h2 className="tagline-txt">
            Accelerate your career with expert-led trainings.
          </h2>
          <h1 className="tagline-txt">
            "Our company specializes in providing top-quality IT training to
            professionals and businesses looking to stay ahead of the curve in
            the constantly evolving world of technology."
          </h1>
          <h3 className="tagline-txt">
          Stay ahead of the curve with our cutting-edge IT training.
          </h3>
          <div className="tagline-btn-container">
            <button className="tagline-btn apply">Apply Now!</button>
            <button className="tagline-btn contact">Contact Us</button>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <img
            className="tagline-trainings-img"
            src={Trainings}
            alt="Trainings"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <div className="tagline-partners">
            <h1 id="tagline-partners-txt"> Our Corporate Trainees</h1>
            <img
              className="tagline-partners-img"
              src={Partners}
              alt="Partners"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Tagline;
