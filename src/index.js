import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import GithubContextProvider from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-0rmldgdbn6l13z2x.us.auth0.com"
    // clientId="d7oew5IU5zDXaCdrudfhH4YN1L3D8fn"
    clientId="9E8WARukoEE89ZP9aEJy6FTuRfnojOC3"
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <GithubContextProvider>
      <App />
    </GithubContextProvider>
  </Auth0Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
