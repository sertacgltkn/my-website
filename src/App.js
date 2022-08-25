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


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <MainBG/>
      <ThemeContext.Provider value="dark" >
        <Button/>
      </ThemeContext.Provider>
      {/* 
      <Media></Media>
      <Linear/>
      <Alerty/>
      <Muis/>
      <Card/>
      <Counter/> 
      */}
    </div>
  );
}

export default App;
