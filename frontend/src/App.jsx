import {React} from "react";
import "./App.css";
// import {useAuth0} from "@auth0/auth0-react";
// import LoginPage from "./Components/login-page/login-page";
import RatingPage from "./Components/rating-page/rating-page";
import Drag from "./Components/rating-page/drag-drop/Drag-drop";
import "./Components/rating-page/drag-drop/drag.css";
/**
 *  The main app component
 * @return {component} the app component
 */
function App() {
  // const {isAuthenticated} = useAuth0();

  return (
    <div className="App">
      {/* {isAuthenticated ? (
        <RatingPage />
      ) : <LoginPage />} */}
      <Drag className="form-container" />
{/* <RatingPage /> */}
    </div>
  );
}

export default App;
