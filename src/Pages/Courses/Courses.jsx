import React from 'react';
import Nav from '../../Components/Navbar/Nav';
import Footer from '../../Components/Footer/Footer';
import { Grid } from '@material-ui/core';
import agd from '../../assets/Courses/agd.png';
import ave from '../../assets/Courses/ave.png';
import fog from '../../assets/Courses/fog.png';
import Enquiry from '../../Modules/Enquiry/Enquiry';
import './CoursesStyles.css';
const Courses = () => {
    return (
        <>
            <Nav />
            <div className="courses-page-container">
                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                        <div className="course-card-container">
                            <h1 className="course-category">
                                Select <span>Course</span>
                            </h1>
                            {/*1st course Grid */}
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12}>
                                    <h2 className="course-type">
                                        Graphics
                                    </h2>
                                </Grid>

                                <Grid item xs={12} sm={12} md={4}>
                                    <div className="course-page-card">
                                        <img src={fog} alt="" className="course-title-img" />
                                        <h3 className="course-title">
                                            Fundamentals of Graphic Design
                                        </h3>
                                        <p className="course-desc">
                                            Duration: <span className="duration">
                                                8 weeks
                                            </span><br />
                                            Elements:  <span className="elements">
                                                Adobe Photoshop, Canva
                                            </span>
                                        </p>
                                        <Enquiry name="Enroll Now" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <div className="course-page-card">
                                        <img src={agd} alt="" className="course-title-img" />
                                        <h3 className="course-title">
                                            Advanced Graphic Designing
                                        </h3>
                                        <p className="course-desc">
                                            Duration: <span className="duration">
                                                8 weeks
                                            </span><br />
                                            Elements:  <span className="elements">
                                                Adobe Illustrator, Corel Draw
                                            </span>
                                        </p>
                                        <Enquiry name="Enroll Now" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <div className="course-page-card">
                                        <img src={ave} alt="" className="course-title-img" />
                                        <h3 className="course-title">
                                            Advanced Video Editing Course
                                        </h3>
                                        <p className="course-desc">
                                            Duration: <span className="duration">
                                                16 weeks
                                            </span><br />
                                            Elements:  <span className="elements">
                                                Adobe Premier Pro
                                            </span>
                                        </p>
                                        <Enquiry name="Enroll Now" />
                                    </div>
                                </Grid>
                            </Grid>
                            {/* 2nd course Grid */}
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12}>
                                    <h2 className="course-type">
                                        Virtual Assitant
                                    </h2>
                                </Grid>

                                <Grid item xs={12} sm={12} md={4}>
                                    <div className="course-page-card">
                                        <img src={fog} alt="" className="course-title-img" />
                                        <h3 className="course-title">
                                            Amazon FBA Wholesale
                                        </h3>
                                        <p className="course-desc">
                                            Duration: <span className="duration">
                                                12 weeks
                                            </span><br />
                                            Elements:  <span className="elements">
                                                Product Hunting, Product Sourcing, PPC, Listing, How to sell online
                                            </span>
                                        </p>
                                        <Enquiry name="Enroll Now" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <div className="course-page-card">
                                        <img src={agd} alt="" className="course-title-img" />
                                        <h3 className="course-title">
                                            Amazon FBA PL
                                        </h3>
                                        <p className="course-desc">
                                            Duration: <span className="duration">
                                                12 weeks
                                            </span><br />
                                            Elements:  <span className="elements">
                                                Product Hunting, Product Sourcing, SMM, How to sell online
                                            </span>
                                        </p>
                                        <Enquiry name="Enroll Now" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <div className="course-page-card">
                                        <img src={ave} alt="" className="course-title-img" />
                                        <h3 className="course-title">
                                            Daraz Virtual Assistant
                                        </h3>
                                        <p className="course-desc">
                                            Duration: <span className="duration">
                                                12 weeks
                                            </span><br />
                                            Elements:  <span className="elements">
                                                Account Creation, Listing, Sourcing, Marketing, FBM & FBD
                                            </span>
                                        </p>
                                        <Enquiry name="Enroll Now" />
                                    </div>
                                </Grid>
                            </Grid>
                            {/* 3rd Course */}
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12}>
                                    <h2 className="course-type">
                                        Data Analysis and Financial Modeling
                                    </h2>
                                </Grid>

                                <Grid item xs={12} sm={12} md={4}>
                                    <div className="course-page-card">
                                        <img src={fog} alt="" className="course-title-img" />
                                        <h3 className="course-title">
                                            Data Analysis & Visualization
                                        </h3>
                                        <p className="course-desc">
                                            Duration: <span className="duration">
                                                4 weeks
                                            </span><br />
                                            Elements:  <span className="elements">
                                                Power BI
                                            </span>
                                        </p>
                                        <Enquiry name="Enroll Now" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <div className="course-page-card">
                                        <img src={agd} alt="" className="course-title-img" />
                                        <h3 className="course-title">
                                            Advanced Financial Reporting
                                        </h3>
                                        <p className="course-desc">
                                            Duration: <span className="duration">
                                                4 weeks
                                            </span><br />
                                            Elements:  <span className="elements">
                                                Power BI
                                            </span>
                                        </p>
                                        <Enquiry name="Enroll Now" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <div className="course-page-card">
                                        <img src={ave} alt="" className="course-title-img" />
                                        <h3 className="course-title">
                                            Financial Planning & Analysis
                                        </h3>
                                        <p className="course-desc">
                                            Duration: <span className="duration">
                                                4 weeks
                                            </span><br />
                                            Elements:  <span className="elements">
                                                Power BI & Exel
                                            </span>
                                        </p>
                                        <Enquiry name="Enroll Now" />
                                    </div>
                                </Grid>
                            </Grid>
                            {/* 4th course Grid */}
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12}>
                                    <h2 className="course-type">
                                        Programming {"<> </>"}
                                    </h2>
                                </Grid>

                                <Grid item xs={12} sm={12} md={4}>
                                    <div className="course-page-card">
                                        <img src={fog} alt="" className="course-title-img" />
                                        <h3 className="course-title">
                                            Advanced Front-End Development
                                        </h3>
                                        <p className="course-desc">
                                            Duration: <span className="duration">
                                                08 weeks
                                            </span><br />
                                            Elements:  <span className="elements">
                                                HTML5, JavaScript, CCS3, Bootstrap
                                            </span>
                                        </p>
                                        <Enquiry name="Enroll Now" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <div className="course-page-card">
                                        <img src={agd} alt="" className="course-title-img" />
                                        <h3 className="course-title">
                                            Modern Web App Development
                                        </h3>
                                        <p className="course-desc">
                                            Duration: <span className="duration">
                                                16 weeks
                                            </span><br />
                                            Elements:  <span className="elements">
                                                HTML5, CSS3, Reactjs, Nodejs, MySQL
                                            </span>
                                        </p>
                                        <Enquiry name="Enroll Now" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <div className="course-page-card">
                                        <img src={ave} alt="" className="course-title-img" />
                                        <h3 className="course-title">
                                            Hybrid Mobile App Development
                                        </h3>
                                        <p className="course-desc">
                                            Duration: <span className="duration">
                                                16 weeks
                                            </span><br />
                                            Elements:  <span className="elements">
                                                React Native or Flutter, Firebase
                                            </span>
                                        </p>
                                        <Enquiry name="Enroll Now" />
                                    </div>
                                </Grid>
                            </Grid>
                            {/* 5th course Grid */}
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12}>
                                    <h2 className="course-type">
                                        Digital Marketing
                                    </h2>
                                </Grid>

                                <Grid item xs={12} sm={12} md={4}>
                                    <div className="course-page-card">
                                        <img src={fog} alt="" className="course-title-img" />
                                        <h3 className="course-title">
                                            Advanced Digital Marketing
                                        </h3>
                                        <p className="course-desc">
                                            Duration: <span className="duration">
                                                16 weeks
                                            </span><br />
                                            Elements:  <span className="elements">
                                                SEO, Google Ads, Affiliate Marketing, SMM
                                            </span>
                                        </p>
                                        <Enquiry name="Enroll Now" />
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </>
    )
}

export default Courses