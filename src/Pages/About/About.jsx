import React from 'react';
import { Grid } from '@material-ui/core';
import Header from '../../Components/Header/Header';
import Nav from '../../Components/Navbar/Nav';
import Footer from '../../Components/Footer/Footer';
import aboutus from '../../assets/company/aboutus.png';
import ourteam from '../../assets/company/our-team.png';
import "./AboutStyles.css";

const About = () => {
    return (
        <>
            <Header />
            <Nav />
            <div className="about-container">
                <Grid container justifyContent='flex-start'>
                    <Grid item xs={12} sm={12} md={3}>

                        <img className='about-img' src={aboutus} alt="about-us-img" />

                    </Grid>
                    <Grid item xs={12} sm={12} md={9}>

                        <h1 data-aos="fade-right" className="about-heading">
                            About Us
                        </h1>
                        <p data-aos="fade-down" className="about-txt">
                            Brain Analytics, was founded in 2022 with the goal of providing high-quality technology training and services to individuals and businesses.
                            Since then, we have helped hundreds of students learn new skills and advance their careers in the fast-paced world of information technology.
                            Our instructors are all industry professionals with years of experience in their respective fields, and we use a hands-on,
                            project-based approach to learning that helps students retain knowledge and develop real-world skills.
                            In addition to our training sessions, we also offer services to businesses, companies and individuals. Our Services and Trainings include Digital Marketing, Data Analysis,
                            Graphic Designing and Video Editing, Virtual Assitants, Web and Mobile Applications and alot more. At Brain Analytics, we are committed to helping our students and clients succeed.
                            Whether you are a beginner looking to break into the IT field or an experienced professional looking to keep your skills up to date,
                            we have a solution that will fit your needs!.
                        </p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <div className="about-our-team">
                            <img src={ourteam} alt="ourteam" className='our-team-img' />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <div className="profile-card">
                            helloworld
                        </div>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </>
    )
}

export default About