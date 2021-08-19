import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
// import * as serviceWorker from './serviceWorker';

//import './App.css';
import "./assets/scss/style.scss";
import "./hddr.css";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
