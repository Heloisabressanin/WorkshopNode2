import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GoogleOAuthProvider } from "@react-oauth/google";

import { BrowserRouter } from 'react-router-dom'

/* ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
 
    <GoogleOAuthProvider clientId="400772517585-kbklhea6qc67rd3hitke8j2ikfphl7dp.apps.googleusercontent.com">
      ... <App />
    </GoogleOAuthProvider>
  </BrowserRouter> */
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GoogleOAuthProvider clientId="400772517585-kbklhea6qc67rd3hitke8j2ikfphl7dp.apps.googleusercontent.com">
    <React.StrictMode>
       <BrowserRouter>
      <App />
       </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>,
 
);

