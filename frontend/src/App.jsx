import { React } from "react";
import "./app.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from "./components/login-page/login-page";
import RatingPage from "./components/rating-page/rating-page";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      {isAuthenticated ? (
        <RatingPage />
      ) : <LoginPage />}
    </div>
  );
}

export default App;
