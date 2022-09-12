import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Projects from "./components/Projects";
import Navbar from "../src/components/Navbar";
import Media from "../src/components/Media";
import Footer from "./components/Footer";
import About from "./components/about/About";
import Carousel from "./components/Carousel";
import Alerty from "./components/Alerty";
import Home from "./components/Home";
import Counter from "./components/Counter";
import Linear from "./components/Linear";
import MainBG from "./components/MainBG";
import MuisAlert from "./components/MuisAlert";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/card" element={<Projects />} />
          <Route path="/media" element={<Media />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/alerty" element={<Alerty />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/linear" element={<Linear />} />
          <Route path="/mainbg" element={<MainBG />} />
          <Route path="/muis" element={<MuisAlert />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
