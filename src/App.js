import React, { useEffect } from "react";
import Whatsapp from "./Modules/Whatsapp/Whatsapp";
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Nav";
import Tagline from "./Modules/Tagline/Tagline";
import Benefits from "./Modules/Benefits/Benefits";
import SocialMedia from "./Modules/SocialMedia/SocialMedia";
import Courses from "./Modules/Courses/Courses";
import Services from "./Modules/Services/Services";
import Footer from "./Components/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="App">
      <Header />
      <Nav />
      <Tagline />
      <Benefits />
      <Courses />
      <Services />
      <SocialMedia />
      <Footer />
      <Whatsapp />
    </div>
  );
}

export default App;
