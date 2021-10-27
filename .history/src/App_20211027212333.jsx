import React, { useState } from "react";
import "./App.css";
import logo from "./logo.png";
import arrowLeft from "./left-arrow.png";
import arrowRight from "./right-arrow.png";

import missionData from "./components/missiondata";


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
      .then(() => setIsLoading(false));
  }, []);

  console.log(launches);

  return (
    <div>
      {isLoading ? (
        <div> is loading </div>
      ) : (
        <div className="content">
          <div className="navbar">
            <img
              className="arrow-left"
              src={arrowLeft}
              alt=""
              onClick={() =>
                launchnumber > 0 ? setLaunchnumber(launchnumber - 1) : ""
              }
            />
            <img className="logo" src={logo} alt="" />
            <img
              className="arrow-right"
              src={arrowRight}
              alt=""
              onClick={() =>
                launchnumber < 9 ? setLaunchnumber(launchnumber + 1) : ""
              }
            />
          </div>
          <missionData />

          <div className="rescue-ships">
            <div className="header">RESCUE SHIPS</div>
            <div className="ship-container">
              {launches[launchnumber].ships[0] ? (
                <div className="ship-slide">
                  <img
                    className="ship-image"
                    src={launches[launchnumber].ships[0].image}
                    alt=""
                  />
                  <div className="header-slide">
                    {launches[launchnumber].ships[0].name}
                  </div>
                  <div className="row">
                    <div className="header-content-slide">
                      HOME PORT{" "}
                      <div className="header-content-slide-text">
                        {launches[launchnumber].ships[0].home_port}{" "}
                      </div>{" "}
                    </div>
                  </div>
                  <div className="row">
                    <div className="header-content-slide">
                      WEIGHT [KG]{" "}
                      <div className="header-content-slide-text"></div>{" "}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="header">no rescue ships</div>
              )}

              {launches[launchnumber].ships[1] ? (
                <div className="ship-slide">
                  <img
                    className="ship-image"
                    src={launches[launchnumber].ships[1].image}
                    alt=""
                  />
                  <div className="header-slide">
                    {launches[launchnumber].ships[1].name}
                  </div>
                  <div className="row">
                    <div className="header-content-slide">
                      HOME PORT{" "}
                      <div className="header-content-slide-text">
                        {launches[launchnumber].ships[1].home_port}{" "}
                      </div>{" "}
                    </div>
                  </div>
                  <div className="row">
                    <div className="header-content-slide">
                      WEIGHT [KG]{" "}
                      <div className="header-content-slide-text"></div>{" "}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              {launches[launchnumber].ships[2] ? (
                <div className="ship-slide">
                  <img
                    className="ship-image"
                    src={launches[launchnumber].ships[2].image}
                    alt=""
                  />
                  <div className="header-slide">
                    {launches[launchnumber].ships[2].name}
                  </div>
                  <div className="row">
                    <div className="header-content-slide">
                      HOME PORT{" "}
                      <div className="header-content-slide-text">
                        {launches[launchnumber].ships[2].home_port}{" "}
                      </div>{" "}
                    </div>
                  </div>
                  <div className="row">
                    <div className="header-content-slide">
                      WEIGHT [KG]{" "}
                      <div className="header-content-slide-text"></div>{" "}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              {launches[launchnumber].ships[3] ? (
                <div className="ship-slide">
                  <img
                    className="ship-image"
                    src={launches[launchnumber].ships[3].image}
                    alt=""
                  />
                  <div className="header-slide">
                    {launches[launchnumber].ships[3].name}
                  </div>
                  <div className="row">
                    <div className="header-content-slide">
                      HOME PORT{" "}
                      <div className="header-content-slide-text">
                        {launches[launchnumber].ships[3].home_port}{" "}
                      </div>{" "}
                    </div>
                  </div>
                  <div className="row">
                    <div className="header-content-slide">
                      WEIGHT [KG]{" "}
                      <div className="header-content-slide-text"></div>{" "}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
