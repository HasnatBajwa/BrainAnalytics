import React from 'react';
import { Grid } from '@material-ui/core';
import Header from '../../Components/Header/Header';
import Nav from '../../Components/Navbar/Nav';
import Footer from '../../Components/Footer/Footer';
import Typewriter from 'typewriter-effect';
import "./AboutStyles.css";

const About = () => {
    const aboutDisplayTxt = "Brain Analytics, was founded in 2022 with the goal of providing high-quality technology training and services to individuals and businesses. Since then, we have helped hundreds of students learn new skills and advance their careers in the fast-paced world of information technology. Our instructors are all industry professionals with years of experience in their respective fields, and we use a hands-on, project-based approach to learning that helps students retain knowledge and develop real-world skills. In addition to our training sessions, we also offer services to businesses, companies and individuals. Our Services and Trainings include Digital Marketing, Data Analysis, Graphic Designing and Video Editing, Virtual Assitants, Web and Mobile Applications and alot more. At Brain Analytics, we are committed to helping our students and clients succeed. Whether you are a beginner looking to break into the IT field or an experienced professional looking to keep your skills up to date, we have a solution that will fit your needs!."
    return (
        <>
            <Header />
            <Nav />
            <div className="about-container">
                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                        <div className="typewriter-container">
                            <Typewriter
                                className="about-typewriter"
                                options={{
                                    strings: [aboutDisplayTxt],
                                    autoStart: true,
                                    loop: false,
                                    delay: 10,
                                }}
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </>
    )
}

export default About