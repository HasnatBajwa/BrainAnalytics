import React from "react";
import "./CoursesStyles.css";
import { Grid } from "@material-ui/core";

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
            <h1 className="course-title">Digital Marketing</h1>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div data-aos='fade-left' className="course-card">
            <h1 className="course-title da">Data Analysis</h1>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <div data-aos='fade-up' className="course-card">
            <h2 className="course-title gd">Graphic Design & Video Editing</h2>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <div data-aos='fade-up' className="course-card">
            <h2 className="course-title va">Virtual Assistant</h2>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <div data-aos='fade-up' className="course-card">
            <h2 className="course-title wd">Web & Mobile App Dev</h2>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Courses;
