import React from "react";

import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id} className="BadgesListItem">
                <div>
                  <img
                    src={badge.avatarUrl}
                    alt={`${badge.firstName} ${badge.lastName}`}
                    className="BadgesListItem__avatar"
                  />
                </div>
                <div>
                  <strong>
                    {badge.firstName} {badge.lastName}
                  </strong>
                  <br />@{badge.twitter}
                  <br />
                  {badge.jobTitle}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
