import React from "react";
import LoginCard from "../Login-page/Login-Card/Login-card";
import tacoPic from "./images/tacoImage.jpg";
/**
 *  The LoginPage component
 * @return {component} the LoginPage component
 */
function LoginPage() {
  return (
    <div className="sign-on-page">
      <LoginCard />
      <img className="taco-image" src={tacoPic} alt="tacos" />
    </div>
  );
}

export default LoginPage;
