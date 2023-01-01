import React from "react";
import { Grid } from "@material-ui/core";
import "./ServicesStyles.css";

const Services = () => {
  return (
    <div className="services-container">
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <h1 className="service-heading">Our Services</h1>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <div className="services-card">
            <h1>services</h1>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className="services-card">
            <h1>services</h1>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className="services-card">
            <h1>services</h1>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="services-card">
            <h1>services</h1>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="services-card">
            <h1>services</h1>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className="services-card">
            <h1>services</h1>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className="services-card">
            <h1>services</h1>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;
