import React from "react";
import ReactDOM from "react-dom";
import "./styles/Main.css";
import Landing from "./pages/Landing";
import { ReactLocation, Router } from "@tanstack/react-location";

const location = new ReactLocation();

ReactDOM.render(
  <React.StrictMode>
    <Router location={location} routes={[
      { path: "/", element: <Landing /> }
    ]} />
  </React.StrictMode>,
  document.getElementById("root")
);
