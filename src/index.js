import React from "react"; // analogo a createElement
import ReactDOM from "react-dom"; // analogo a appendChild
import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
import Badge from "./components/Badge";

const container = document.getElementById("app");

// ReactDOM.render( que queremos renderizar, donde lo vamos a renderizar)
ReactDOM.render(
  <Badge
    firstName="Ramón"
    lastName="López"
    avatarUrl="https://www.gravatar.com/avatar?d=identicon"
    jobTitle="Kickass senior dev"
    twitter="chilangomagic"
  />,
  container
);
