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
import About from "./components/About";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.js';
import Aboutt from './pages/Aboutt.js';
import Analytics from './pages/Analytics.js';
import Comment from './pages/Comment.js';
import Product from './pages/Product.js';
import ProductList from './pages/ProductList.js';


function App() {

  const [theme, setTheme] = useState ('light')

  const [count, setCount] = useState (0);

  return (
    <div>
      <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
      <br/><br/><br/><br/><br/><br/>


      <button onClick={()=> setCount (count +1)} >İncrease</button>
      <button onClick={()=> setCount (count -1)} >Decrease</button>
      <h1>{count}</h1>
      
      <Navbar/>

      <About/>
      

      <Card/>
      
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
