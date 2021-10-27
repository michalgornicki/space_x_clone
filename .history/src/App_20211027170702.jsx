import React from "react";
import "./App.css";
import logo from "./logo.png";

const LAUNCHES =  `
{
  launchesPast {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      video_link
    }
    rocket {
      rocket_name
      first_stage {
        cores {
          flight
          core {
            reuse_count
            status
          }
        }
      }
      second_stage {
        payloads {
          payload_type
          payload_mass_kg
          payload_mass_lbs
        }
      }
    }
    ships {
      name
      home_port
      image
    }
  }
}

`

function App() {

  React.useEffect(() =>{
    fetch("https://api.spacex.land/graphql/", {
    method: "POST",
    headers: { "Content-Type": "application/json"}, 
    body: JSON.stringify({query: LAUNCHES})
    })
    .then(response => response.json())
    .then(data => data)
  }, []);

  console.log(LAUNCHES)


  return (
    <div className="content">
      <div className="navbar">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="mission-data">
        <div className="column">
          <div className="header">MISSION</div>
          <div className="header-content text-large">{LAUNCHES.mission_name}</div>
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
        <div className="ship-container">
        <div className="ship-slide">
          <img src="" alt="" />
          <div className="header"></div>
          <div className="header-content"></div>
          <div className="header-content"></div>
        </div>
        <div className="ship-slide">
          <img src="" alt="" />
          <div className="header"></div>
          <div className="header-content"></div>
          <div className="header-content"></div>
        </div>
        <div className="ship-slide">
          <img src="" alt="" />
          <div className="header"></div>
          <div className="header-content"></div>
          <div className="header-content"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
