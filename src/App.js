import React, { useState } from "react";
import Card from "../src/components/Card";
import Navbar from "../src/components/Navbar";
import Media from "../src/components/Media";
import Footer from "./components/Footer";
import About from "./components/about/About";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Card />
      
      <Media />
     
      <Footer />
      
      
    </div>
  );
}

export default App;
