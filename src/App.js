
import React from 'react';
import './App.css';
// import SignOn from './Components/sign-on-page/sign-up-card/Sign-Up-Card.js'
import SignOnPage from './Components/sign-on-page/Login-Page'
import LoginButton from './LoginButton';
import LogOutButton from './LogOutButton';




function App() {
  return (
    <div className="App">
      <SignOnPage />
      <LoginButton />
      <LogOutButton />
 
    </div>
  );
}

export default App;
