import React from "react";
import {createRoot} from "react-dom/client";
import {Auth0Provider} from "@auth0/auth0-react";
import App from "./App.jsx";
import "./index.css";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const root = createRoot(document.getElementById("root"));
//
root.render(
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>,
);
