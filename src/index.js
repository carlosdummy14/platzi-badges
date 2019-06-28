import React from "react"; // analogo a createElement
import ReactDOM from "react-dom"; // analogo a appendChild
import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
import BadgeNew from "./pages/BadgeNew";

const container = document.getElementById("app");

// ReactDOM.render( que queremos renderizar, donde lo vamos a renderizar)
ReactDOM.render(<BadgeNew />, container);
