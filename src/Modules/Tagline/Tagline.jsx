import React from "react";
import "./TaglineStyles.css";
import { Grid } from "@material-ui/core";
import Trainings from "../../assets/company/Trainings.png";

const Tagline = () => {
  return (
    <div className="tagline-container">
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <h1 id="tagline-txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            consequatur neque deserunt debitis esse, nostrum libero cupiditate
            inventore quasi ipsum voluptas atque sequi dolores illo, aperiam
            sunt. Delectus, quisquam iste?
          </h1>
          <div className="tagline-btn-container">
            <button className="tagline-btn apply">Apply Now!</button>
            <button className="tagline-btn contact">Contact Us</button>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <img className="tagline-trainings-img" src={Trainings} alt="Trainings" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Tagline;
