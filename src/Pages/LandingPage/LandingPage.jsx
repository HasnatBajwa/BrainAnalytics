import React from 'react';
import Nav from '../../Components/Navbar/Nav';
import Tagline from '../../Modules/Tagline/Tagline';
import Benefits from '../../Modules/Benefits/Benefits';
import SocialMedia from '../../Modules/SocialMedia/SocialMedia';
import Courses from '../../Modules/Courses/Courses';
// import Services from '../../Modules/Services/Services';
import About from '../../Modules/About/About';
import Footer from '../../Components/Footer/Footer';
import DiscoverMore from '../../Modules/DiscoverMore/DiscoverMore';
import TrendingCourse from '../../Modules/TrendingCourse/TrendingCourse';
import Trainings from '../../Modules/Trainings/Trainings';
const LandingPage = () => {
  return (
    <>
      <Nav />
      <Tagline />
      <Benefits />
      <Courses />
      <About />
      <DiscoverMore />
      <TrendingCourse />
      <Trainings />
      {/* <Services/> */}
      <SocialMedia />
      <Footer />
    </>
  )
}

export default LandingPage