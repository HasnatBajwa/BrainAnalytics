import React from 'react';
import { Grid, Modal } from '@material-ui/core';
import { FaPlayCircle } from 'react-icons/fa'
import Nav from '../../Components/Navbar/Nav';
import Footer from '../../Components/Footer/Footer';
import tahirProfile from '../../assets/Profile/tahir-profile.png';
import saifProfile from '../../assets/Profile/saif-profile.png';
import hasnatProfile from '../../assets/Profile/hasnat-profile.png';
import femaleProfile from '../../assets/Profile/female-profile.png';
import shokatProfile from '../../assets/Profile/shokatProfile.png';
import Gallery from '../../Components/Gallery/Gallery';
import { BsBook } from 'react-icons/bs';
import { FaUniversity } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import "./AboutStyles.css";


const About = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Nav />
            <div className="about-container">
                <Grid container justifyContent='flex-start'>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className='company-video-tagline'>
                            <FaPlayCircle className='video-player' onClick={handleOpen} />
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                                className='video-modal'
                            >
                                <div className="video-container">
                                    <iframe
                                        className='company-video'
                                        src="https://www.youtube.com/embed/X8oUtrcH4YI?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=1"
                                        title="Brain Analytics"
                                    /></div>
                            </Modal>
                        </div>

                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="about-txt-container">
                            <h3 className="about-heading">
                                About Us
                            </h3>
                            <p data-aos="fade-down" className="about-txt">
                                Brain Analytics, was founded in 2022 with the goal of providing high-quality technology training and services to individuals and businesses.
                                Since then, we have helped hundreds of students learn new skills and advance their careers in the fast-paced world of information technology.
                                Our instructors are all industry professionals with years of experience in their respective fields, and we use a hands-on,
                                project-based approach to learning that helps students retain knowledge and develop real-world skills.
                                In addition to our training sessions, we also offer services to businesses, companies and individuals. Our Services and Trainings include Digital Marketing, Data Analysis,
                                Graphic Designing and Video Editing, Virtual Assitants, Web and Mobile Applications and alot more. At Brain Analytics, we are committed to helping our students and clients succeed.
                                Whether you are a beginner looking to break into the IT field or an experienced professional looking to keep your skills up to date,
                                we have a solution that will fit your needs!.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Deserunt sapiente quos cumque sunt explicabo placeat eaque quis quas perferendis eum nemo, ut,
                                fugit sint amet quasi porro eveniet modi eius?Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Deserunt sapiente quos cumque sunt explicabo placeat eaque quis quas perferendis eum nemo, ut,
                                fugit sint amet quasi porro eveniet modi eius?Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Deserunt sapiente quos cumque sunt explicabo placeat eaque quis quas perferendis eum nemo, ut,
                                fugit sint amet quasi porro eveniet modi eius?Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Deserunt sapiente quos cumque sunt explicabo placeat eaque quis quas perferendis eum nemo, ut,
                                fugit sint amet quasi porro eveniet modi eius?Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Deserunt sapiente quos cumque sunt explicabo placeat eaque quis quas perferendis eum nemo, ut,
                                fugit sint amet quasi porro eveniet modi eius?Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Deserunt sapiente quos cumque sunt explicabo placeat eaque quis quas perferendis eum nemo, ut,
                                fugit sint amet quasi porro eveniet modi eius?Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Deserunt sapiente quos cumque sunt explicabo placeat eaque quis quas perferendis eum nemo, ut.
                            </p>
                        </div>
                    </Grid>
                    {/* Training Section */}
                    <div className="about-student-container">
                        <Grid container>
                            <Grid item xs={3} sm={3} md={4}>
                                <div className="student-card">
                                    <SiGooglescholar className='about-student-icon' />
                                    <h4 className="about-student-txt">1000+</h4>
                                    <h3 className="about-student-head">Students</h3>

                                </div>
                            </Grid>
                            <Grid item xs={3} sm={3} md={4}>
                                <div className="student-card">
                                    <BsBook className='about-student-icon' />
                                    <h4 className="about-student-txt">20+</h4>
                                    <h3 className="about-student-head">Courses</h3>
                                </div>
                            </Grid>
                            <Grid item xs={3} sm={3} md={4}>
                                <div className="student-card">
                                    <FaUniversity className='about-student-icon' />
                                    <h4 className="about-student-txt">Onsite / Online</h4>
                                    <h3 className="about-student-head">Trainings</h3>
                                </div>
                            </Grid>

                        </Grid>
                    </div>
                </Grid>
                {/* Trainers */}
                <div className="trainers-container">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={4}>
                            <div className="trainer-card">
                                <img className='trainer-img' src={tahirProfile} alt="Tahir Aziz" />
                                <h1 className="trainer-title">Tahir Abdul Aziz</h1>
                                <p className="trainer-desc">
                                    <span className="trainer-desig">CEO, Brain Analytics</span>
                                    Mr. Tahir Aziz is an experienced and passionate finance professional having experience in Airlines,
                                    Air Cargo & Logistics Busines and Textile Industry.
                                    He possess 20+ years of experience at Managenment position dealing with financial and Management Reporting.
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <div className="trainer-card">
                                <img className='trainer-img' src={saifProfile} alt="saif ur rehman" />
                                <h1 className="trainer-title">Saif ur Rehman</h1>
                                <p className="trainer-desc">
                                    <span className="trainer-desig">Manager, Brain Analytics</span>
                                    Mr. Saif Ur Rehman is a highly experience professional having expertise in Accounts & Finance, Digital Marketing and Graphic Designing.
                                    His analytical skills and innovative approach to problem solving makes him an asset to any business.
                                </p>

                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <div className="trainer-card">
                                <img className='trainer-img' src={hasnatProfile} alt="hasnat bajwa" />
                                <h1 className="trainer-title">Mohammad Hasnat</h1>
                                <p className="trainer-desc">
                                    <span className="trainer-desig">Software Engineer, Brain Analytics</span>
                                    Mr. Hasnat is an experienced and certified Software Engineer, DBA , UI/UX developer.
                                    Having a strong understanding of problem solving, and creating user-friendly applications.
                                    His abilities and experience make him a great asset to any project or team
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={4}>
                            <div className="trainer-card">
                                <img className='trainer-img' src={shokatProfile} alt="shokat javed" />
                                <h1 className="trainer-title">Shokat Javed</h1>
                                <p className="trainer-desc">
                                    <span className="trainer-desig">Software Engineer, Brain Analytics</span>
                                    Mr. Shokat is an experienced and passionate software developer.
                                    He has 10 years experience in the fields of analysis, designing, development, implementation and management of computer based information systems.
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <div className="trainer-card">
                                <img className='trainer-img' src={femaleProfile} alt="Alisha Tahir" />
                                <h1 className="trainer-title">Alisha Tahir &nbsp;</h1>
                                <p className="trainer-desc">
                                    <span className="trainer-desig">Amazon Business Consultant, Brain Analytics</span>
                                    Ms Alisha is an Amazon Private Label Expert. 
                                    Her Expertise include Product Research, product sourcing, Listing creation and Management, Order Management. 
                                    Her presence and her experience is a valuable asset for any organization.
                                </p>

                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <div className="trainer-card">
                                <img className='trainer-img' src={femaleProfile} alt="Muqaddas Nazir" />
                                <h1 className="trainer-title">Muqaddas Nazir</h1>
                                <p className="trainer-desc">
                                    <span className="trainer-desig">Amazon Business Consultant, Brain Analytics</span>
                                    Ms Muqaddas is an Amazon Private Label Expert. 
                                    Her Expertise include Product Research, product sourcing, Listing creation and Management, Order Management. 
                                    Her presence and her experience is a valuable asset for any organization.
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <Gallery />
            </div>
            <Footer />
        </>
    )
}

export default About