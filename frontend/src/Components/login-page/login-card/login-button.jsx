import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./login-card.css";

function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      type="button"
      className="input-bar"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
}

export default LoginButton;