import React from "react";
import Whatsapp from "./Modules/Whatsapp/Whatsapp";
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Nav";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Whatsapp />
    </div>
  );
}

export default App;
