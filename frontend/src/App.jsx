import { React } from "react";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from "./Components/login-page/login-page";
// import Profile from "./profile";
import RatingPage from "./Components/rating-page/rating-page";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      {isAuthenticated ? (
        <RatingPage />
      ) : <LoginPage />}

      );
    </div>
  );
}

export default App;
