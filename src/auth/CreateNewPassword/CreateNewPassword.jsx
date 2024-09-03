import React, { useState } from "react";
import "./CreateNewPassword.css";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import logo from '../../assets/logo.svg';
import { useNavigate } from "react-router-dom";

const CreateNewPassword = () => {
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const Nav = useNavigate()
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
              <p>Choose a new password below. For security reasons, you will be logged out of all devices.</p>
            </div>
            <div className="inputHolder">
              Password
              <div className="loginUpInput">
                {show ? (
                  <input type="password" className="pass inp" />
                ) : (
                  <input type="text" className="pass inp" />
                )}
                <span>
                  {show ? (
                    <BsEye size={20} onClick={() => setShow(false)} />
                  ) : (
                    <BsEyeSlash size={20} onClick={() => setShow(true)} />
                  )}
                </span>
              </div>
            </div>
            <div className="inputHolder">
              Password
              <div className="loginUpInput">
                {show ? (
                  <input type="password" className="pass inp" />
                ) : (
                  <input type="text" className="pass inp" />
                )}
                <span>
                  {show ? (
                    <BsEye size={20} onClick={() => setShow(false)} />
                  ) : (
                    <BsEyeSlash size={20} onClick={() => setShow(true)} />
                  )}
                </span>
              </div>
            </div>
                  
            {/* <div className='correctPassInput'>hello</div> */}
            <div className="correctPassMess">
              <p>Your password must have:</p>
              <p>At least 12 characters, 1 uppercase letter, 1 lowercase letter and 1 number</p>
            </div>
            <button className="loginBtn" onClick={()=>Nav('/resetpassword')}>Reset Password</button>
          </div>
        </div>
        <div>©2024 KindRaise, Inc. All rights reserved</div>
      </div>
    </div>
  );
};

export default CreateNewPassword;
