import React from 'react';
import ReactDOM from 'react-dom';
import Views from "./views/index.jsx";
import GlobalStyle from "./config/globalStyled";
import "./config/plugins";
import AuthProvider from "../src/contexts/auth";
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Views />
        <GlobalStyle />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

