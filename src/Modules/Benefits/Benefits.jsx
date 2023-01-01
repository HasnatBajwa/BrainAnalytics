import React from "react";
import "./BenefitsStyles.css";
import { Grid } from "@material-ui/core";


const Benefits = () => {
  return (
    <div className="benefits-container">
      <Grid className="benefits-data" container justifyContent="center">
        <Grid item xs={4} sm={4} md={4}>
          <h1 data-aos="fade-right" className="benefits-heading-1">
            Benefits
          </h1>
          <p className="benefits-txt">
            Transform your career and your life with the power of technology.
          </p>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <div className="benefits-bar"> </div>
          <h2 data-aos="fade-up" className="benefits-heading-2">
            Amazing Learning Ecosystem
          </h2>
          <p className="benefits-txt">
            Through access to cutting-edge resources and personalized learning
            experiences, an advanced learning ecosystem provides the tools and
            support necessary for success in a rapidly changing world.
          </p>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <div className="benefits-bar"> </div>
          <h2 data-aos="fade-left" className="benefits-heading-2">
            Expert Instructors
          </h2>
          <p className="benefits-txt">
            Through their guidance and support, Our Instructors play a crucial
            role in helping their students achieve their goals and succeed in
            their careers.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Benefits;
