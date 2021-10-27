import React from "react";

const missionData = (props) => {
    return (

<div className="mission-data">
            <div className="column">
              <div className="header">MISSION</div>
              <div className="header-content text-large">
                {launches[launchnumber].mission_name}
              </div>
              <div className="header">ROCKET</div>
              <div className="header-content">
                {launches[launchnumber].rocket.rocket_name}
              </div>
              <div className="learn-more">LEARN MORE</div>
            </div>
            <div className="column">
              <div className="header text-align-right">LAUNCH DATE</div>
              <div className="header-content text-align-right">
                {launches[launchnumber].launch_date_utc.substring(0, 10)}
              </div>
              <div className="header text-align-right">LAUNCH SITE</div>
              <div className="header-content text-align-right">
                {launches[launchnumber].launch_site.site_name}
              </div>
            </div>
          </div>

    )}

    export default missionData;