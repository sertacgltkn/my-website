import React, { useState } from "react";
import { IoMdClose, IoMdImage, IoMdMenu } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import "../components/Header.css";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { IoIosContact } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { TiMessageTyping } from "react-icons/ti";
import { TbSocial } from "react-icons/tb";

const Header = () => {
  const [active, setActive] = useState(false);

  const activateNav = () => {
    setActive(!active);
  };

  return (
    <div className={active ? "header" : "header-mobile"}>
      <div className="icon" onClick={activateNav}>
        {!active ? (
          <IoMdMenu className="menu-icon" />
        ) : (
          <GrClose className="close-icon" />
        )}
      </div>

      <nav>
        <ul className={active ? "ul-item" : "ul-item oicon"}>
          <li>
            <SiAboutdotme onClick={activateNav} className="icon" />
            <Link to="/about">About</Link>
          </li>
          <li>
            <AiOutlineHome onClick={activateNav} className="icon" />
            <Link to="/">Home</Link>
          </li>
          <li>
            <IoIosContact onClick={activateNav} className="icon" />
            <Link to="/card">Contact</Link>
          </li>
          <li>
            <FaQuestionCircle onClick={activateNav} className="icon" />
            <Link to="/counter">FAQ</Link>
          </li>
          <li>
            <FaProductHunt onClick={activateNav} className="icon" />
            <Link to="/card">Projects</Link>
          </li>
          <li>
            <FiCheck onClick={activateNav} className="icon" />
            <Link to="/linear">Experience</Link>
          </li>
          <li>
            <TiMessageTyping onClick={activateNav} className="icon" />
            <Link to="/muis">İletişim</Link>
          </li>
          <li>
            <TbSocial onClick={activateNav} className="icon" />
            <Link to="/mainbg">Social</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
