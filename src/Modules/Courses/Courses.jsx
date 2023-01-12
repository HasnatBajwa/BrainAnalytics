import React from "react";
import "./CoursesStyles.css";
import { Grid } from "@material-ui/core";
import digitalMarketing from '../../assets/Courses/digitalmarketing.png';
import graphicDesigning from '../../assets/Courses/graphic-designing.png';
import dataAnalysis from '../../assets/Courses/data-analysis.png';
import virtualAssitant from '../../assets/Courses/virtualassistant.png';
import webAndApp from '../../assets/Courses/webandapp.png'; 

const Courses = () => {
  return (
    <div className="courses-container">
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <div>
            <h1 data-aos="fade-right" className="courses-heading">
              Our Courses
            </h1>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div data-aos='fade-right' className="course-card dm">
            <img src={digitalMarketing} alt="Digital-Marketing" className="course-img" />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div data-aos='fade-left' className="course-card">
            <img src={dataAnalysis} alt="Data-Analysis" className="course-img" />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <div data-aos='fade-up' className="course-card">
            <img src={graphicDesigning} alt="Graphic-Designing" className="course-img" />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <div data-aos='fade-up' className="course-card">
            <img src={virtualAssitant} alt="Virtual-Assistant" className="course-img" />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <div data-aos='fade-up' className="course-card">
            <img src={webAndApp} alt="Web-and-App" className="course-img" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Courses;
