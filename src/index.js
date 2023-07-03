// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// ReactDOM.render(
    
    //         <App />
    //     ,
    //     document.getElementById('root')
    // )
    
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-h9dl694v.us.auth0.com"
    clientId="ELx5PpJ3e0jeFpnpGrE8oJ61gwkHhozy"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);