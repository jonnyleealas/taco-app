import {React} from "react";
import "./App.css";
import {useAuth0} from "@auth0/auth0-react";
import LoginPage from "./Components/Login-page/Login-page.jsx";
import RatingPage from "./Components/Rating-page/Rating-page.jsx";


/**
 *  The main app component
 * @return {component} the app component
 */
function App() {
  const {isAuthenticated} = useAuth0();

  return (
    <div className="App">
      {isAuthenticated ? (
        <RatingPage />
      ) : <LoginPage />}
    </div>
  );
}

export default App;
