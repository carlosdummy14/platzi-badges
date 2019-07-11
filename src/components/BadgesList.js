import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesList.css";
import Gravatar from "./Gravatar";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id} className="BadgesListItem">
                <div>
                  <Gravatar
                    email={badge.email}
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
