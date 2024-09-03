import React, { useState } from "react";
import "./resetpassword.css";
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
              <h2>Reset your password</h2>
              <p>We’ll send a reset email link to your associated email address.</p>
            </div>
            <div className="inputHolder">
              Email Address
              <input type="text" className="loginUpInput inp" />
            </div>
            <button className="loginBtn" onClick={()=>Nav('/dashboard')}>
            Reset Password
            </button>
            <div className="returnMess">Return to sign in</div>
            <div className="sighUpCreateAcc">
              Dont have a kind raise account? <span>Create one</span>
            </div>
          </div>
        </div>
        <div>©2024 KindRaise, Inc. All rights reserved</div>
      </div>
    </div>
  );
};

export default Login;
