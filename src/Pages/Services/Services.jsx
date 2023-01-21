import React from 'react';
import Nav from '../../Components/Navbar/Nav';
import Footer from '../../Components/Footer/Footer';
import './ServicesStyles.css';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import gd from '../../assets/services/gd.jpg'
import sd from '../../assets/services/sd.jpg'
import ed from '../../assets/services/ed.jpg'
const Services = () => {
    return (
        <>
            <Nav />
            <div className="services-container">
                <h1 className="service-heading">
                    Our Services
                </h1>
                {/* Graphic Services */}
                <h2 className="service-category">Graphic Design</h2>
                <Grid container>
                    <Grid item xs={12} sm={12} md={3}>
                        <div className="service-card">
                            <img src={gd} alt="grapic" className="service-img" />
                            <h3 className="service-title">Business Card Design</h3>
                            <p className="service-desc">Get your Business Card Designed from our highly skilled and specialized designers</p>
                            <Link to='/ContactUs'><button className="get-service">Get Qoute</button></Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <div className="service-card">
                            <img src={gd} alt="grapic" className="service-img" />
                            <h3 className="service-title">Posters Design</h3>
                            <p className="service-desc">Get your Social Media Designed from our highly skilled and specialized designers</p>
                            <Link to='/ContactUs'><button className="get-service">Get Qoute</button></Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <div className="service-card">
                            <img src={gd} alt="grapic" className="service-img" />
                            <h3 className="service-title">Logo Design</h3>
                            <p className="service-desc">Get your Company Logo Designed from our highly skilled and specialized designers</p>
                            <Link to='/ContactUs'><button className="get-service">Get Qoute</button></Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <div className="service-card">
                            <img src={gd} alt="grapic" className="service-img" />
                            <h3 className="service-title">Banner Design</h3>
                            <p className="service-desc">Get your Advertising Banner Designed from our highly skilled and specialized designers</p>
                            <Link to='/ContactUs'><button className="get-service">Get Qoute</button></Link>
                        </div>
                    </Grid>
                </Grid>
                 {/* Development Services */}
                 <h2 className="service-category">Software Development</h2>
                <Grid container>
                    <Grid item xs={12} sm={12} md={3}>
                        <div className="service-card">
                            <img src={sd}alt="grapic" className="service-img" />
                            <h3 className="service-title">Website Development</h3>
                            <p className="service-desc">Get your Personal or Business website developed from our highly skilled and specialized engineers</p>
                            <Link to='/ContactUs'><button className="get-service">Get Qoute</button></Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <div className="service-card">
                            <img src={sd} alt="grapic" className="service-img" />
                            <h3 className="service-title">Mobile Application</h3>
                            <p className="service-desc">Get your IOS & Android App developed from our highly skilled and specialized engineers</p>
                            <Link to='/ContactUs'><button className="get-service">Get Qoute</button></Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <div className="service-card">
                            <img src={sd} alt="grapic" className="service-img" />
                            <h3 className="service-title">Database Development</h3>
                            <p className="service-desc">Get your Database developed from our highly skilled and specialized developers</p>
                            <Link to='/ContactUs'><button className="get-service">Get Qoute</button></Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <div className="service-card">
                            <img src={sd} alt="grapic" className="service-img" />
                            <h3 className="service-title">Financial Analysis</h3>
                            <p className="service-desc">Get your Financial Analysis Dashboard developed in Power BI from our highly skilled and specialized developers</p>
                            <Link to='/ContactUs'><button className="get-service">Get Qoute</button></Link>
                        </div>
                    </Grid>
                </Grid>
                {/* Ecommerce */}
                <h2 className="service-category">E commerce</h2>
                <Grid container>
                    <Grid item xs={12} sm={12} md={3}>
                        <div className="service-card">
                            <img src={ed}alt="grapic" className="service-img" />
                            <h3 className="service-title">Product Hunting</h3>
                            <p className="service-desc">Get the Product you need to outstand the marketplace</p>
                            <Link to='/ContactUs'><button className="get-service">Get Qoute</button></Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <div className="service-card">
                            <img src={ed} alt="grapic" className="service-img" />
                            <h3 className="service-title">listing Optimization</h3>
                            <p className="service-desc">Get your Listing optimized so that your products are displayed on the firstpage</p>
                            <Link to='/ContactUs'><button className="get-service">Get Qoute</button></Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <div className="service-card">
                            <img src={ed} alt="grapic" className="service-img" />
                            <h3 className="service-title">Product marketing</h3>
                            <p className="service-desc">Not getting enough orders? Let's get your product marketed so that it reaches the right audience</p>
                            <Link to='/ContactUs'><button className="get-service">Get Qoute</button></Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <div className="service-card">
                            <img src={ed} alt="grapic" className="service-img" />
                            <h3 className="service-title">Shopify Dropshipping</h3>
                            <p className="service-desc">Get your Shopify Dropshipping store ready in no time so you can start working on it asap</p>
                            <Link to='/ContactUs'><button className="get-service">Get Qoute</button></Link>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </>
    )
}

export default Services