import React from "react";
import "./login-card.css";
import LoginButton from "./Login-button";

/**
 *  The Login Card component
 * @return {component} the Login component
 */
function Login() {
  return (
    <div className="signin-card">
      <div>
        <h1>
          Welcome to the Taco App
        </h1>
        <p className="free-trial">
          Find and rate Tacos Spots
          {" "}
          <br />
          {" "}
          all over the country
        </p>
      </div>
      <div className="check-box">
        <span>
          <input type="checkbox" checked="checked" />
        </span>
        <span>
          <p>
            I agree to all Term, Privacy Policy and Fees
          </p>
        </span>
      </div>
      <div>
        <LoginButton className="input-bar" />
      </div>
    </div>
  );
}

export default Login;
