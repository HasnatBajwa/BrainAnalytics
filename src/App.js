import React, {useEffect} from "react";
import Whatsapp from "./Modules/Whatsapp/Whatsapp";
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Nav";
import Tagline from "./Modules/Tagline/Tagline";
import Benefits from "./Modules/Benefits/Benefits";
import SocialMedia from "./Modules/SocialMedia/SocialMedia";
import Courses from "./Modules/Courses/Courses";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
function App() {
  useEffect(() => {
    Aos.init({ duration: 1500, once:true });
  }, []);
  return (
 <div className="App">
      <Header />
      <Nav />
      <Tagline />
      <Benefits />
      <Courses />
      <SocialMedia />
      <Whatsapp />
    </div>
  );
}

export default App;
