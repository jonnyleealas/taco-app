import React from "react";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from "./Components/login-page/login-page";
import Profile from "./profile";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      {isAuthenticated ? <Profile /> : <LoginPage />}
    </div>
  );
}

export default App;
