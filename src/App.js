import React from "react";
import Muis from "../src/components/Muis";
import Card from "../src/components/Card";
import Navbar from "../src/components/Navbar";
import Media from "../src/components/Media";
import Alerty from "../src/components/Alerty";
import Counter from "../src/components/Counter";
import Linear from "../src/components/Linear";
import MainBG from "./components/MainBG";
import ThemeContext  from "../src/context/ThemeContext";
import Button from "./components/Button";
import Carousel from "./components/Carousel"
import Footer from "./components/Footer";
/* import HomeLayout from "./components/HomeLayout";       <HomeLayout/> */

function App() {
  return (
    <div>
      
      <Navbar></Navbar>
      <hr/>
      <Carousel/>
      <hr/>
      <Card/>
      <hr/>
      <Footer/>
      <hr/>
      
      
      
      <ThemeContext.Provider value="dark" >
        <Button/>
      </ThemeContext.Provider>
      {/* <MainBG/>
      <Media></Media>
      <Linear/>
      <Alerty/>
      <Muis/>
      
      <Counter/> 
      */}
    </div>
  );
}

export default App;
