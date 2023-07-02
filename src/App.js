
import React from 'react';
import './App.css';
// import SignOn from './Components/sign-on-page/sign-up-card/Sign-Up-Card.js'
// import SignOnPage from './Components/sign-on-page/Login-Page'
import LoginButton from './Components/sign-on-page/LoginButton';
import LogOutButton from './Components/sign-on-page/LogOutButton';
import UserProfile from './Components/sign-on-page/sign-up-card/UserProfile';



function App() {
  return (
    <div className="App">
      {/* <SignOnPage /> */}
      <LoginButton />
      <LogOutButton />
      <UserProfile />
    </div>
  );
}

export default App;
