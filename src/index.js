import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.render(
    <Auth0Provider
        domain='dev-h9dl694v.us.auth0.com'
        clientId='cyK3HVh6QmxgJVmsEstheE0pW3KRVxpu'
        redirect_uri={window.location.origin}
    >
        <App />
    </Auth0Provider>,
    document.getElementById('root')
)