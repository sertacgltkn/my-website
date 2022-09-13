import React, { useState } from "react";
import { IoMdClose, IoMdImage, IoMdMenu } from "react-icons/io";
import "../components/Header.css";
import { Link } from "react-router-dom"

const Header = () => {

    const[active, setActive] = useState(false);

    const activateNav = () => {
        setActive(!active)
    }

  return (
    <div className={active ? 'header' : 'header-mobile'}>

        <div className="icon" onClick={activateNav}>


            {!active ? <IoMdMenu className="menu"/> : <IoMdClose className="close-icon"/> }

        </div>

      <nav>
        <ul className={active ? 'ul-item' : 'ul-item oicon'}>
          <li>
            <IoMdImage className="icon" />
            <Link to="/">About</Link>
          </li>
          <li>
            <IoMdImage className="icon" />
            <Link to="/">Home</Link>
          </li>
          <li>
            <IoMdImage className="icon" />
            <Link to="/">Contact</Link>
          </li>
          <li>
            <IoMdImage className="icon" />
            <Link to="/">FAQ</Link>
          </li>
          <li>
            <IoMdImage className="icon" />
            <Link to="/">Projects</Link>
          </li>
          <li>
            <IoMdImage className="icon" />
            <Link to="/">Experience</Link>
          </li>
          <li>
            <IoMdImage className="icon" /> 
            <Link to="/">İletişim</Link>
          </li>
          <li>
            <IoMdImage className="icon" />
            <Link to="/">Social</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
