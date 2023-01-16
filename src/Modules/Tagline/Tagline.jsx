import React from "react";
import "./TaglineStyles.css";
import { Grid } from "@material-ui/core";
import Trainings from "../../assets/company/Trainings.png";

const Tagline = () => {
  return (
    <div className="tagline-container">
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={12} md={6}>
          <h1 className="tagline-heading">
            Accelerate your career with expert-led trainings.
          </h1>
          <p className="tagline-txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rerum debitis officiis maiores voluptatem, quaerat est quos expedita harum inventore vitae saepe repellat necessitatibus laboriosam corrupti deserunt quas, deleniti eaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Nam distinctio pariatur modi dolore consectetur repellat ullam et inventore corrupti officia iusto cupiditate libero deleniti ea quos iste, veritatis quidem perferendis.
          </p>

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
      </Grid>
    </div>
  );
};

export default Tagline;