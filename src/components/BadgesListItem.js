import React from "react";

import "./styles/BadgesList.css";
import Gravatar from "./Gravatar";

function BadgesListItem(props) {
  return (
    <div className="BadgesListItem">
      <div>
        <Gravatar
          email={props.badge.email}
          alt={`${props.badge.firstName} ${props.badge.lastName}`}
          className="BadgesListItem__avatar"
        />
      </div>
      <div>
        <strong>
          {props.badge.firstName} {props.badge.lastName}
        </strong>
        <br />@{props.badge.twitter}
        <br />
        {props.badge.jobTitle}
      </div>
    </div>
  );
}

export default BadgesListItem;
