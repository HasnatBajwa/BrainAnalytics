import React from "react";
import Whatsapp from "./Modules/Whatsapp/Whatsapp";
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Nav";
import Tagline from "./Modules/Tagline/Tagline";
import Benefits from "./Modules/Benefits/Benefits";
import SocialMedia from "./Modules/SocialMedia/SocialMedia";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Tagline />
      <Benefits />
      <SocialMedia />
      <Whatsapp />
    </div>
  );
}

export default App;
