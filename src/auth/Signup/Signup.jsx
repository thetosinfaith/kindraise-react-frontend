import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.svg";
import "./Signup.css";
import { BiArrowBack } from "react-icons/bi";
import UserSignup from "./UserSignup";
import IndividualSignup from "./IndividualSignup";
import NpoSignup from "./NpoSignup";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import WelcomeSignup from "./WelcomeSignup";

const Signup = () => {
  const Nav = useNavigate();

  const [activeSignupPage, setActiveSignupPage] = useLocalStorage("A");

  const renderPage = () => {
    switch (activeSignupPage) {
      case "A":
        return <UserSignup setActiveSignupPage={setActiveSignupPage}/>;
      case "B":
        return <IndividualSignup setActiveSignupPage={setActiveSignupPage}/>;
      case "C":
        return <NpoSignup setActiveSignupPage={setActiveSignupPage}/>;
      case "D":
        return <WelcomeSignup setActiveSignupPage={setActiveSignupPage}/>;
      default:
        return <UserSignup setActiveSignupPage={setActiveSignupPage} />;
    }
  };

  useEffect(() => {
    // page()
    // console.log(page())
    // console.log(activeSignupPage)
  }, []);

  // if (activeSignupPage === "A") {
  //   console.log("a");
  // } else if (activeSignupPage === "B") {
  //   console.log("b");
  // } else {
  //   console.log("c");
  // }

  return (
    <section>
      <div className="signup-container">
        <div className="signup-inner">
          <div className="signupBackArrow">
            {activeSignupPage == "A" ? null : (
              <span onClick={() => setActiveSignupPage("A")}>
                <BiArrowBack /> Back
              </span>
            )}
          </div>
          <div className="signupLogoBox">
            <img src={Logo} alt="" onClick={()=>setActiveSignupPage("A")}/>
          </div>
          <div className="signupTextBox">
            <h1>Create a KindRaise account</h1>
            <div>Amplify your mission with our easy-to-use tools.</div>
          </div>
        </div>

        <div className="signup-inputs">{renderPage()}</div>
      </div>
    </section>
  );
};

export default Signup;
