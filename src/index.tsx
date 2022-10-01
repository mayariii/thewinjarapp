import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import { Amplify } from "aws-amplify";

import config from "./aws-exports";
import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";

// check if env is localhost or not
const isLocalhost = !!(window.location.hostname === "localhost");

// split redirect signin and signout strings into correct URIs
const [doNotUseSignIn, productionRedirectSignIn, localRedirectSignIn] =
  config.oauth.redirectSignIn.split(",");
const [doNotUseSignOut, productionRedirectSignOut, localRedirectSignOut] =
  config.oauth.redirectSignOut.split(",");

// use correct URI in the right env
const updatedAwsConfig = {
  ...config,
  oauth: {
    ...config.oauth,
    redirectSignIn: isLocalhost
      ? localRedirectSignIn
      : productionRedirectSignIn,
    redirectSignOut: isLocalhost
      ? localRedirectSignOut
      : productionRedirectSignOut,
  },
};
Amplify.configure(updatedAwsConfig);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AmplifyProvider>
      <Authenticator.Provider>
        <App />
      </Authenticator.Provider>
    </AmplifyProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
