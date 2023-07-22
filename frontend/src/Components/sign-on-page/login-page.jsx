import React from "react";
import LoginCard from "../Login-page/Login-Card/Login-Card";
import tacoPic from "./Images/tacoImage.jpg";

function LoginPage() {
  return (
    <div className="sign-on-page">
      <LoginCard />
      <img className="taco-image" src={tacoPic} alt="tacos" />
    </div>
  );
}

export default LoginPage;
