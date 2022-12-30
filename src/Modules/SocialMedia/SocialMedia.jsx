import React from "react";
import "./SocialMedia.css";
import { Grid } from "@material-ui/core";
import Facebook from "../../assets/SocialMedia/Facebook.png";
import Instagram from "../../assets/SocialMedia/Instagram.png";
import WhatsApp from "../../assets/SocialMedia/WhatsApp.png";
import Twitter from "../../assets/SocialMedia/Twitter.png";
import LinkedIn from "../../assets/SocialMedia/LinkedIn.png";

const SocialMedia = () => {
  return (
    <div className="socialmedia-container">
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <h1 className="social-media-heading">
            Social Media <span className="social-media-presence">Presence</span>
          </h1>
        </Grid>
          <div className="socialmedia-icon-container">
            <img src={Facebook} alt="Facebook" className="socialmedia-icon fb" />
            <img src={Instagram} alt="Instagram" className="socialmedia-icon ig" />
            <img src={WhatsApp} alt="WhatsApp" className="socialmedia-icon wa" />
            <img src={LinkedIn} alt="LinkedIn" className="socialmedia-icon li" />
            <img src={Twitter} alt="Twitter" className="socialmedia-icon tw" />
          </div>
      </Grid>
    </div>
  );
};

export default SocialMedia;
