import React from "react";
import LoginCard from "./login-card/login-card";
import tacoPic from "./images/tacoImage.jpg";
import "./login-page.css";

function LoginPage() {
  return (
    <div className="sign-on-page">
      <LoginCard />
      <img className="taco-image" src={tacoPic} alt="tacos" />
    </div>
  );
}

export default LoginPage;
