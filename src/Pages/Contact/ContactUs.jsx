import React from 'react';
import { Grid } from '@material-ui/core';
import './ContactUsStyles.css';
import Nav from '../../Components/Navbar/Nav';
import Footer from '../../Components/Footer/Footer';
import { AiTwotoneMail } from 'react-icons/ai';
import { BsTelephoneFill } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import contact from '../../assets/company/contact.png'

const ContactUs = () => {
    return (
        <>
            <Nav />
            <div className="contact-us-container">
                <h1 className="contact-heading">
                    Get in Touch with Us
                </h1>
                <Grid container>
                    <Grid item xs={12} sm={12} md={4}>
                        <div className="contact-card">
                            <AiTwotoneMail className='contact-icon' />
                            <h1 className="contact-type">
                                Email Us
                            </h1>
                            <p className="contact-txt">
                                info@brainanalytics.pk
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <div className="contact-card">
                            <BsTelephoneFill className='contact-icon' />
                            <h1 className="contact-type">
                                Location
                            </h1>
                            <p className="contact-txt">
                                Khayaban Gardens
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <div className="contact-card">
                            <HiLocationMarker className='contact-icon' />
                            <h1 className="contact-type">
                                Phone
                            </h1>
                            <p className="contact-txt">
                                +92-42-8787246
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className='contact-form-container'>
                <Grid  container>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="contact-form">
                            <img src={contact} alt="" className="contact-img" />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="contact-form">
                            <h2 className="contact-form-head">
                                Get in touch with us
                            </h2>
                            <h1 className="contact-us-heading">
                                Do you Have Any Question?
                            </h1>
                            <div className='contact-input-container'>
                                <input className='contact-form-in' placeholder='Name' type="text" />
                                <input className='contact-form-in' placeholder='Email' type="text" />
                            </div>
                            <div className='contact-input-container'>
                                <input className='contact-form-in' placeholder='Phone' type="text" />
                                <input className='contact-form-in' placeholder='Subject' type="text" />
                            </div>
                            <div className='contact-input-container'>
                                <textarea className='text-area' placeholder='Message' name="" id="" cols="60" rows="10"></textarea>
                                <button className='contact-submit-btn'>Submit</button>
                            </div>
                      
                        </div>
                    </Grid>
                </Grid>
                </div>
            <Footer />
        </>
    )
}

export default ContactUs