import { React } from "react";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from "./Components/Login-page/Login-Page";
import RatingPage from "./Components/Rating-Page/Rating-Page";

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
