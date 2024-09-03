import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import logo from '../../assets/logo.svg';

const Login = () => {
  const Nav = useNavigate();
  const [show, setShow] = useState(true);
  return (
    <div className="loginBody">
      <div className="logoSec">
        <img src={logo} alt="" />
      </div>
      <div className="formSec">
        <div className="formBox">
          <div className="formWrapper">
            <div className="loginText">
              <h2>Welcome Back, Change-Maker!</h2>
              <p>Log in to continue your journey of making a difference</p>
            </div>
            <div className="inputHolder">
              Email Address
              <input type="text" className="loginUpInput inp" />
            </div>
            <div className="inputHolder">
              Password
              <div className="loginUpInput">
                <input type={show ? 'password' : 'text'} className="pass inp" />
                <span>
                  {show ? (
                    <BsEye size={20} onClick={() => setShow(false)} />
                  ) : (
                    <BsEyeSlash size={20} onClick={() => setShow(true)} />
                  )}
                </span>
              </div>
            </div>
            <div className="forgetPassword">Forget password</div>
            <button className="loginBtn" onClick={() => Nav("/passwordchange")}>
              Sign in
            </button>
            <div className="sighUpCreateAcc">
              Dont have a kind raise account? <span onClick={()=>Nav(-1)}>Create one</span>
            </div>
          </div>
        </div>
        <div className="rights">©2024 KindRaise, Inc. All rights reserved</div>
      </div>
    </div>
  );
};

export default Login;
