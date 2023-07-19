import { useState, React } from "react";
import "./App.css";
// import { useAuth0 } from "@auth0/auth0-react";
// import LoginPage from "./Components/login-page/login-page";
// import Profile from "./profile";
// import RatingPage from "./Components/rating-page/rating-page";
import Modal from "./modal";

function App() {
  // const { isAuthenticated } = useAuth0();
  const [overlayOpen, setOverlayOpen] = useState(false);

  return (
    <div className="App">
      {/* {isAuthenticated ? <RatingPage /> : <LoginPage />} */}
      <button onClick={() => setOverlayOpen(!overlayOpen)} type="button">Button</button>
      <Modal isOpen={overlayOpen} onClose={() => setOverlayOpen(!overlayOpen)}>
        <h1>Modal stuff</h1>
      </Modal>
    </div>
  );
}

export default App;
