import React, { useState } from "react";
import "./App.css";
import logo from "./logo.png";
import arrowLeft from "./left-arrow.png";
import arrowRight from "./right-arrow.png";

const LAUNCHES = `
{
  launchesPast(limit: 100) {
    mission_name
    launch_date_local
    details
    launch_site {
      site_name
      site_name_long
    }
    rocket {
      rocket_name
    }
    links {
      flickr_images
    }
    ships {
      name
      home_port
      image
      type
      year_built
    }
    launch_date_utc
  }
}

`;

function App() {
  const [launches, setLaunches] = React.useState([]);
  const [launchnumber, setLaunchnumber] = React.useState(6);
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
        <div className="loading"> data loading ... </div>
      ) : (
        <div className="content">
          <div className="container-1">
            <div className="navbar">
              <img
                className="arrow-left"
                src={arrowLeft}
                alt=""
                onClick={() =>
                  launchnumber > 0 ? setLaunchnumber(launchnumber - 1) : ""
                }
              />
              <a href="index.html">
                <img className="logo" src={logo} alt="" />
              </a>
              <img
                className="arrow-right"
                src={arrowRight}
                alt=""
                onClick={() =>
                  launchnumber < 99 ? setLaunchnumber(launchnumber + 1) : ""
                }
              />
            </div>
            <div className="mission-data">
              <div className="column">
                <div className="header">
                  MISSION {launchnumber + 1 + "/100"}{" "}
                </div>
                <div className="header-content text-large">
                  {launches[launchnumber].mission_name}
                </div>
                <div className="header"> ROCKET</div>
                <div className="header-content">
                  <abbr
                    title="Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond. Falcon 9 is the world’s first orbital class reusable rocket. Reusability allows SpaceX to refly the most expensive parts of the rocket, which in turn drives down the cost of space access.
"
                  >
                    {launches[launchnumber].rocket.rocket_name}
                  </abbr>
                </div>
              </div>
              <div className="column">
                <div className="header text-align-right">LAUNCH DATE</div>
                <div className="header-content text-align-right">
                  {launches[launchnumber].launch_date_utc.substring(0, 10)}
                </div>
                <div className="header text-align-right">LAUNCH SITE</div>
                <div className="header-content text-align-right">
                  <abbr
                    title={launches[launchnumber].launch_site.site_name_long}
                  >
                    {" "}
                    {launches[launchnumber].launch_site.site_name}{" "}
                  </abbr>
                </div>
              </div>
            </div>

            {launches[launchnumber].details ? (
              <div className="details">{launches[launchnumber].details}</div>
            ) : (
              ""
            )}

            {launches[launchnumber].links.flickr_images[0] ? (
              <div className="launch-image-container">
                <img
                  className="launch-image"
                  src={launches[launchnumber].links.flickr_images[0]}
                  alt=""
                />
                <img
                  className="launch-image"
                  src={launches[launchnumber].links.flickr_images[1]}
                  alt=""
                />
                <img
                  className="launch-image"
                  src={launches[launchnumber].links.flickr_images[2]}
                  alt=""
                />
              </div>
            ) : (
              ""
            )}

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
                        HOME PORT
                        <div className="header-content-slide-text">
                          {launches[launchnumber].ships[0].home_port}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="header-content-slide">
                        TYPE
                        <div className="header-content-slide-text">
                          {launches[launchnumber].ships[0].type
                            ? launches[launchnumber].ships[0].type
                            : "not available"}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="header-content-slide">
                        YEAR BUILT
                        <div className="header-content-slide-text">
                          {launches[launchnumber].ships[0].year_built
                            ? launches[launchnumber].ships[0].year_built
                            : "not available"}
                        </div>
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
                        HOME PORT
                        <div className="header-content-slide-text">
                          {launches[launchnumber].ships[1].home_port}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="header-content-slide">
                        TYPE
                        <div className="header-content-slide-text">
                          {launches[launchnumber].ships[1].type
                            ? launches[launchnumber].ships[1].type
                            : "not available"}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="header-content-slide">
                        YEAR BUILT
                        <div className="header-content-slide-text">
                          {launches[launchnumber].ships[1].year_built
                            ? launches[launchnumber].ships[1].year_built
                            : "not available"}
                        </div>
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
                        HOME PORT
                        <div className="header-content-slide-text">
                          {launches[launchnumber].ships[2].home_port}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="header-content-slide">
                        TYPE
                        <div className="header-content-slide-text">
                          {launches[launchnumber].ships[2].type
                            ? launches[launchnumber].ships[2].type
                            : "not available"}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="header-content-slide">
                        YEAR BUILT
                        <div className="header-content-slide-text">
                          {launches[launchnumber].ships[2].year_built
                            ? launches[launchnumber].ships[2].year_built
                            : "not available"}
                        </div>
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
                        HOME PORT
                        <div className="header-content-slide-text">
                          {launches[launchnumber].ships[3].home_port}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="header-content-slide">
                        TYPE
                        <div className="header-content-slide-text">
                          {launches[launchnumber].ships[3].type
                            ? launches[launchnumber].ships[3].type
                            : "not available"}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="header-content-slide">
                        YEAR BUILT
                        <div className="header-content-slide-text">
                          {launches[launchnumber].ships[3].year_built
                            ? launches[launchnumber].ships[3].year_built
                            : "not available"}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="container-2">
            <div className="header">LAST 100 MISSIONS</div>

            <div className="mission-list">
              {launches.map((launch, index) => {
                return (
                  <div
                    className="mission-item"
                    key={index}
                    onClick={() => setLaunchnumber(index)}
                  >
                    {launch.mission_name}{" "}
                    <span className="mission-date">
                      {" "}
                      {launch.launch_date_local.substring(0, 10)}{" "}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
