/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable max-len */
import {React, useState} from "react";
import "./App.css";
// import {useAuth0} from "@auth0/auth0-react";
// import LoginPage from "./Components/login-page/login-page";
// eslint-disable-next-line no-unused-vars
import RatingPage from "./Components/rating-page/rating-page";
import Drag from "./Components/rating-page/drag-drop/Drag-drop";
import "./Components/rating-page/drag-drop/drag.css";
/**
 *  The main app component
 * @return {component} the app component
 */
function App() {
  // const {isAuthenticated} = useAuth0();
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(true);
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };
  return (
    <div className="App">
      {/* {isAuthenticated ? (
        <RatingPage />
      // eslint-disable--line react/jsx-no-comment-textnodes, react/jsx-no-comment-textnodes
      ) : <LoginPage />} */}
      {/* <Drag open={openModal} onClose={handleModalClose} /> */}
      <RatingPage />
      {/* <button onClick={handleModal}>opne</button> */}
    </div>
  );
}

export default App;
