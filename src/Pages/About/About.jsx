import React from 'react';
import { Grid } from '@material-ui/core';
import Header from '../../Components/Header/Header';
import Nav from '../../Components/Navbar/Nav';
import Footer from '../../Components/Footer/Footer';
import aboutus from '../../assets/company/aboutus.png';
import ourteam from '../../assets/company/our-team.png';
import tahirProfile from '../../assets/Profile/tahir-profile.png';
import saifProfile from '../../assets/Profile/saif-profile.png';
import hasnatProfile from '../../assets/Profile/hasnat-profile.png';
import femaleProfile from '../../assets/Profile/female-profile.png';
import Gallery from '../../Components/Gallery/Gallery';
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
                    <Grid item xs={12} sm={12} md={4}>
                        <div data-aos="fade-right" className="profile-card ceo">
                            <div className='about-profile'>
                                <h1 className='about-profile-heading'>Tahir Aziz</h1>
                                <p className="about-profile-designation"> CEO, Brain Analytics</p>
                                <p className="about-profile-txt">
                                    Mr. Tahir Aziz is an experienced and passionate finance professional having experience in Airlines,
                                    Air Cargo & Logistics Busines and Textile Industry.
                                    He possess 20+ years of experience at Managenment position dealing with financial and Management Reporting.
                                </p>
                            </div>

                            <img src={tahirProfile} alt="Tahir Aziz" className="about-profile-img tahir" />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <div data-aos="fade-up" className="profile-card ceo">
                            <div className='about-profile'>
                                <h1 className='about-profile-heading'>Saif Ur Rehman</h1>
                                <p className="about-profile-designation"> Manager, Brain Analytics</p>
                                <p className="about-profile-txt">
                                    Mr. Saif Ur Rehman is a highly experience professional having expertise in Accounts & Finance, Digital Marketing and Graphic Designing.
                                    His analytical skills and innovative approach to problem solving makes him an asset to any business.
                                </p>
                            </div>

                            <img src={saifProfile} alt="Tahir Aziz" className="about-profile-img saif" />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <div data-aos="fade-left" className="profile-card ceo">
                            <div className='about-profile'>
                                <h1 className='about-profile-heading'>Mohammad Hasnat</h1>
                                <p className="about-profile-designation"> Software Engineer, Brain Analytics</p>
                                <p className="about-profile-txt">
                                    Mr. Hasnat is an experienced and certified Software Engineer, DBA , UI/UX designer and Data Analyst.
                                    He has a strong understanding of problem solving, data analysis, and creating user-friendly applications.
                                    His technical abilities and experience make him a great asset to any project or team
                                </p>
                            </div>

                            <img src={hasnatProfile} alt="Tahir Aziz" className="about-profile-img hasnat" />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="profile-card ceo">
                            <div className='about-profile'>
                                <h1 className='about-profile-heading'>Alisha Tahir</h1>
                                <p className="about-profile-designation"> Virtual Assitant, Brain Analytics</p>
                                <p className="about-profile-txt">
                                    Ms Alisha is an Amazon Private Label Expert.
                                    Her Expertise include Product Research, Keyword
                                    Research, product sourcing, Listing creation and
                                    Management, Product Launching and Rankings,
                                    Order Management, Keepa & Helium 10 Tool
                                    Expertise, Supplier Dealing, Seller Account
                                    Management. Her presence and her experience is a valuable asset for any organization
                                </p>
                            </div>

                            <img src={femaleProfile} alt="Tahir Aziz" className="about-profile-img alisha" />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="profile-card ceo">
                            <div className='about-profile'>
                                <h1 className='about-profile-heading'>Muqaddas Nazeer</h1>
                                <p className="about-profile-designation"> Virtual Assistant, Brain Analytics</p>
                                <p className="about-profile-txt">
                                    Ms Muqaddas is an Amazon FBA Wholesale Expert.
                                    Her Expertise include Product Research, Keyword
                                    Research, product sourcing, Listing creation and
                                    Management, Product Launching and Rankings,
                                    Order Management, Keepa & Helium 10 Tool
                                    Expertise, Supplier Dealing, Seller Account
                                    Management. Her presence and her experience is a valuable asset for any organization
                                </p>
                            </div>

                            <img src={femaleProfile} alt="Tahir Aziz" className="about-profile-img muqaddas" />
                        </div>
                    </Grid>
                </Grid>
                <Gallery />
            </div>
            <Footer />
        </>
    )
}

export default About