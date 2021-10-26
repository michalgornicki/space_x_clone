import React from "react";
import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <div className="content">
      <div className="navbar">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="mission-data">
        <div className="column">
        <div className="header">MISSION</div>
        <div className="header">ROCKET</div>
        </div>
        <div className="button">LEARN MORE</div>
        <div className="column"></div>
        <div className="header">LAUNCH DATE</div>
        <div className="header">LAUNCH SITE</div>
        </div>
      </div>

      <div className="rescue-ships">
        <div className="header">RESCUE SHIPS</div>
      </div>
    </div>
  );
}

export default App;
