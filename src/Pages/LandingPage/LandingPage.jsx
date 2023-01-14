import React from 'react';
import Nav from '../../Components/Navbar/Nav';
import Tagline from '../../Modules/Tagline/Tagline';
import Benefits from '../../Modules/Benefits/Benefits';
import SocialMedia from '../../Modules/SocialMedia/SocialMedia';
import Courses from '../../Modules/Courses/Courses';
import Services from '../../Modules/Services/Services';
import Footer from '../../Components/Footer/Footer';
const LandingPage = () => {
  return (
    <>
    <Nav/>
    <Tagline/>
    <Benefits/>
    <Courses/>
    <Services/>
    <SocialMedia/>
    <Footer/>
    </>
  )
}

export default LandingPage