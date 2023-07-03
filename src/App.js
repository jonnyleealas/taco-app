
import React from 'react';
import './App.css';
import LoginPage from './Components/Login-page/Login-Page'
import Profile from './Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const { isAuthenticated } = useAuth0()
  
  return (
    <div className="App">
     {isAuthenticated ?  <Profile /> : <LoginPage />}     
    </div>
  );
}

export default App;
