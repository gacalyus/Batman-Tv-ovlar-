import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import ShowsStates from "./context/shows/ShowsStates";

ReactDOM.render(
  <ShowsStates>
    <App />
  </ShowsStates>,
  document.getElementById("root")
);
reportWebVitals();
