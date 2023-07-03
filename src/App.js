
import React from 'react';
import './App.css';
// import SignOn from './Components/sign-on-page/sign-up-card/Sign-Up-Card.js'
import SignOnPage from './Components/sign-on-page/Login-Page'
import LoginButton from './Components/sign-on-page/sign-up-card/LoginButton';
import LogOutButton from './LogOutButton';
import Main from './MainPage'
import Profile from './Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const { isAuthenticated } = useAuth0()
  
  return (
    <div className="App">
      
     {isAuthenticated ?  <Profile /> : <SignOnPage />}
      
      {/* <LogOutButton /> */}
      
     
    </div>
  );
}

export default App;
