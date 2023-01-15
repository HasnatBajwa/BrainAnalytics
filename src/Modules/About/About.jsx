import React from 'react';
import './About.css';
import { Grid } from '@material-ui/core'
import Logo from '../../assets/company/Logo.png'

const About = () => {
    return (
        <div className="aboutus-container">
            <Grid container>
                <Grid data-aos='flip-up' item xs={10} sm={10} md={6}>
                    <p className="txt">
                        About Us
                    </p>
                    <h2 className="aboutus-heading">
                        Leap Ahead In Your Career
                    </h2>
                    <p className="aboutus-txt">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Ad natus, deserunt laudantium at ea totam molestias rerum eos obcaecati facilis, culpa iure.
                        Eligendi totam, nam corporis natus maiores sequi expedita! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Ad natus, deserunt laudantium at ea totam molestias rerum eos obcaecati facilis, culpa iure.
                        Eligendi totam, nam corporis natus maiores sequi expedita! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Ad natus, deserunt laudantium at ea totam molestias rerum eos obcaecati facilis, culpa iure.
                        Eligendi totam, nam corporis natus maiores sequi expedita!
                    </p>
                </Grid>
                <Grid data-aos="flip-right" item xs={2} sm={2} md={6}>
                    <img className='aboutus-logo' src={Logo} alt="company Logo" />
                </Grid>
            </Grid>
        </div>
    )
}

export default About