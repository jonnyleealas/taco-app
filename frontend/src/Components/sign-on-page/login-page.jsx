import React from "react";
import LoginCard from "../login-page/login-card/login-card";
import tacoPic from "./images/tacoImage.jpg";
//
function LoginPage() {
  return (
    <div className="sign-on-page">
      <LoginCard />
      <img className="taco-image" src={tacoPic} alt="tacos" />
    </div>
  );
}

export default LoginPage;
