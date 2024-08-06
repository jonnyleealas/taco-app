import React from "react";
import LoginCard from "./Login-Card/Login-card";
import tacoPic from "./images/tacoImage.jpg";

/**
 *  The Login Page component
 * @return {component} the Login Page component
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
