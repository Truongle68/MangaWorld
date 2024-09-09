import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import MangaProvider from './context/MangaContext.jsx';
import {BrowserRouter as Router } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <MangaProvider>
      <GoogleOAuthProvider clientId="1007093675612-kb72s9gc2kv9m0b8an3adaegcb7liepm.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </MangaProvider>
  </Router>,
)
