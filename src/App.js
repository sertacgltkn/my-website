import React, { useState } from "react";
import Card from "../src/components/Card";
import Navbar from "../src/components/Navbar";
import Media from "../src/components/Media";
import Footer from "./components/Footer";
import About from "./components/about/About";
import Carousel from "./components/Carousel";
import Alerty from "./components/Alerty";
import Home from "./components/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/about' element={<About />}/>
        <Route path='/card' element={<Card />}/>
        <Route path='/media' element={<Media />}/>
        <Route path='/carousel' element={<Carousel />}/>
        <Route path='/alerty' element={<Alerty />}/>
      </Routes>
      
      <Footer />

      
      </Router>
    </div>
  );
}

export default App;
