import React, { useEffect } from "react";
import Whatsapp from "./Modules/Whatsapp/Whatsapp";
import LandingPage from "./Pages/LandingPage/LandingPage";
import About from "./Pages/About/About";
import Courses from "./Pages/Courses/Courses";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Services from "./Pages/Services/Services";
function App() {
  useEffect(() => {
    Aos.init({duration: 3000 , once: true });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/Services" exact element={<Services />} />
          <Route path="/Courses" exact element={<Courses />} />
        </Routes>
      </BrowserRouter>
      <Whatsapp />
    </div>
  );
}

export default App;
