import React, { useState } from "react";
import "./App.css";
import logo from "./logo.png";

const LAUNCHES =  `
{
  launchesPast(limit: 10) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
      site_name
      site_id
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
    launch_date_utc
    launch_date_unix
  }
}


`

function App() {

  const [launches, setLaunches] = React.useState([]);
  const [launchnumber, setLaunchnumber] = React.useState(0);

  React.useEffect(() =>{
    fetch("https://api.spacex.land/graphql/", {
    method: "POST",
    headers: { "Content-Type": "application/json"}, 
    body: JSON.stringify({query: LAUNCHES})
    })
    .then(response => response.json())
    .then(data => setLaunches(data.data.launchesPast))
  }, []);

  console.log(launches)

  return (
    <div className="content">
      <div className="navbar">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="mission-data">
        <div className="column">
          <div className="header">MISSION</div>
          <div className="header-content text-large">{launchnumber === 0 ? "" : launches[launchnumber].mission_name}</div>
          <div className="header">ROCKET</div>
          <div className="header-content">{launchnumber === 0 ? "" : launches[launchnumber].rocket.rocket_name}</div>
          <div className="button" onClick={() => setLaunchnumber(launchnumber + 1)}>LEARN MORE</div>
        </div>
        <div className="column">
          <div className="header text-align-right">LAUNCH DATE</div>
          <div className="header-content text-align-right">{launchnumber === 0 ? "" : launches[launchnumber].launch_date_local}</div>
          <div className="header text-align-right">LAUNCH SITE</div>
          <div className="header-content text-align-right">{launchnumber === 0 ? "" : launches[launchnumber].launch_site.site_name}</div>
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
