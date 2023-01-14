import React from "react";
import "./BenefitsStyles.css";
import { Grid } from "@material-ui/core";
import { FaUserTie, FaLightbulb, FaBookReader } from 'react-icons/fa';
import { FcIdea } from 'react-icons/fc';



const Benefits = () => {
  return (
    <div className="benefits-container">
      <Grid container justifyContent="center">
        <Grid item xs={4} sm={4} md={4}>
          <div className="benefits-details">
            <FaUserTie className="benefits-icon"/>
            <h1 className="benefits-heading">Experienced Instructors</h1>
            <p className="benefits-txt">
              Get a chance to learn with real time industry specialists
            </p>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <FaLightbulb className="benefits-icon"/>
          <h1 className="benefits-heading">Brain Storming Ideas</h1>
            <p className="benefits-txt">
              Bring your ideas to life with our project based approach
            </p>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <FaBookReader className="benefits-icon"/>
          <h1 className="benefits-heading">Learning Material</h1>
            <p className="benefits-txt">
              Learn with your own pace with our tailored learning material
            </p>
        </Grid>

      </Grid>

    </div>
  );
};

export default Benefits;
