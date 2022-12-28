import React from "react";
import Whatsapp from "./Modules/Whatsapp/Whatsapp";
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Nav";
import Tagline from "./Modules/Tagline/Tagline";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Tagline />
      <Whatsapp />
    </div>
  );
}

export default App;
