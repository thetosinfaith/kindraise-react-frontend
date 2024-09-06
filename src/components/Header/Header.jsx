import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { BsQuestionCircle } from "react-icons/bs";
import Logo from "../../assets/Logo.svg";
import Icon from "../../assets/Icon.svg";

const Header = () => {
  const [show, setShow] = useState(false);
  console.log(show);

  const Nav = useNavigate();
  return (
    <div className="headerBody">
      <div className="headerWrapper">
        <div className="iconSide">
          <img src={Logo} alt="" />
        </div>
        <div className="menuSide" onClick={() => setShow(!show)}>
          {show ? "close" : "menu"}
        </div>
        {
          show ? 
        <div className="dropDown">
          <div onClick={() => setShow(false)}> drop-down section</div>
        </div>: null
        }
        <div className="headerSighUp">
          <div className="headerBox">
            <BsQuestionCircle size={15} />
          </div>
          <div className="headerBox">
            <div className="greenCircle"></div>Jack samuel
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
