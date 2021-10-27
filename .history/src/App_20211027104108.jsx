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
          <div className="header-content">MISSION</div>
          <div className="header">ROCKET</div>
          <div className="header-content">MISSION</div>
          <div className="button">LEARN MORE</div>
        </div>
        <div className="column">
          <div className="header text-align-right">LAUNCH DATE</div>
          <div className="header-content text-align-right">MISSION</div>
          <div className="header text-align-right">LAUNCH SITE</div>
          <div className="header-content text-align-right">MISSION</div>
        </div>
      </div>

      <div className="rescue-ships">
        <div className="header">RESCUE SHIPS</div>
      </div>
    </div>
  );
}

export default App;
