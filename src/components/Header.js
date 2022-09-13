import React, { useState } from "react";
import { IoMdClose, IoMdImage, IoMdMenu } from "react-icons/io";
import { GrClose} from "react-icons/gr";
import "../components/Header.css";
import { Link } from "react-router-dom"
import {AiOutlineHome} from "react-icons/ai"
import {SiAboutdotme} from "react-icons/si"
import {IoIosContact} from "react-icons/io"
import {FaQuestionCircle} from "react-icons/fa"
import {FaProductHunt} from "react-icons/fa"
import {FiCheck} from "react-icons/fi"
import {TiMessageTyping} from "react-icons/ti"
import {TbSocial} from "react-icons/tb"

const Header = () => {

    const[active, setActive] = useState(false);

    const activateNav = () => {
        setActive(!active)
    }

  return (
    <div className={active ? 'header' : 'header-mobile'}>

        <div className="icon" onClick={activateNav}>


            {!active ? <IoMdMenu className="menu-icon"/> : <GrClose className="close-icon"/> }

        </div>

      <nav>
        <ul className={active ? 'ul-item' : 'ul-item oicon'}>
          <li>
            <SiAboutdotme className="icon" />
            <Link to="/">About</Link>
          </li>
          <li>
            <AiOutlineHome className="icon" />
            <Link to="/">Home</Link>
          </li>
          <li>
            <IoIosContact className="icon" />
            <Link to="/">Contact</Link>
          </li>
          <li>
            <FaQuestionCircle className="icon" />
            <Link to="/">FAQ</Link>
          </li>
          <li>
            <FaProductHunt className="icon" />
            <Link to="/">Projects</Link>
          </li>
          <li>
            <FiCheck className="icon" />
            <Link to="/">Experience</Link>
          </li>
          <li>
            <TiMessageTyping className="icon" /> 
            <Link to="/">İletişim</Link>
          </li>
          <li>
            <TbSocial className="icon" />
            <Link to="/">Social</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;



