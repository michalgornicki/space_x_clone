import React, { useState } from "react";
import "./App.css";
import logo from "./logo.png";

const LAUNCHES = `
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


`;

function App() {
  const [launches, setLaunches] = React.useState([]);
  const [launchnumber, setLaunchnumber] = React.useState(0);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    fetch("https://api.spacex.land/graphql/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: LAUNCHES }),
    })
      .then((response) => response.json())
      .then((data) => setLaunches(data.data.launchesPast))
      .then (() => setIsLoading(false))
  }, []);

  console.log(launches);

  return (
    <div>
      {isLoading ? <div> is loading </div> : 

<div className="content">
<div className="navbar">
  <img className="logo" src={logo} alt="" />
</div>
<div className="mission-data">
  <div className="column">
    <div className="header">MISSION</div>
    <div className="header-content text-large">
      {launchnumber === 0 ? "" : launches[launchnumber].mission_name}
    </div>
    <div className="header">ROCKET</div>
    <div className="header-content">
      {launchnumber === 0
        ? ""
        : launches[launchnumber].rocket.rocket_name}
    </div>
    <div
      className="button"
      onClick={() => launchnumber < 9 ? setLaunchnumber(launchnumber + 1) : ""}
    >
      LEARN MORE
    </div>
  </div>
  <div className="column">
    <div className="header text-align-right">LAUNCH DATE</div>
    <div className="header-content text-align-right">
      {launchnumber === 0 ? "" : launches[launchnumber].launch_date_utc.substring(0,10)}
    </div>
    <div className="header text-align-right">LAUNCH SITE</div>
    <div className="header-content text-align-right">
      {launchnumber === 0
        ? ""
        : launches[launchnumber].launch_site.site_name}
    </div>
  </div>
</div>

<div className="rescue-ships">
  <div className="header">RESCUE SHIPS</div>
  <div className="ship-container">

    
    <div className="ship-slide">
      <img className="ship-image" src={launches[launchnumber].ships[0].image} alt="" />
      <div className="header"></div>
      <div className="header-content"></div>
      <div className="header-content"></div>
    </div>
    <div className="ship-slide">
      <img className="ship-image" src={launches[launchnumber].ships[1].image} alt="" />
      <div className="header"></div>
      <div className="header-content"></div>
      <div className="header-content"></div>
    </div>
    <div className="ship-slide">
      <img className="ship-image" src={launches[launchnumber].ships[2].image} alt="" />
      <div className="header"></div>
      <div className="header-content"></div>
      <div className="header-content"></div>
    </div>
  </div>
</div>
</div>

      }

    </div>
  );
}

export default App;
