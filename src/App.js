import React, {useState} from "react";
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
//import HomeLayout from "./components/HomeLayout";  
import About from "./components/about/About";



function App() {

  const [theme, setTheme] = useState ('light')

  const [count, setCount] = useState (0);

  return (
    <div>
      
      <br/><br/><br/><br/><br/><br/>


      <button onClick={()=> setCount (count +1)} >İncrease</button>
      <button onClick={()=> setCount (count -1)} >Decrease</button>
      <h1>{count}</h1>
      
      <Navbar/>

      <About/>
      

      <Card/>
      <br></br>
      <Media/>
      <br></br>
      
      <Footer/>
 

      {/* 
      <hr/>
      <Carousel/>
      <HomeLayout/>
      <hr/>
      <hr/>
      <hr/>
      <ThemeContext.Provider value="dark" >
        <Button/>
      </ThemeContext.Provider> */}
      {/* <MainBG/>
      
      <Linear/>
      <Alerty/>
      <Muis/>
      <Counter/> 
      */}
    </div>
  );
}

export default App;
