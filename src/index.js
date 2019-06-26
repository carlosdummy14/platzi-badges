import React from "react"; // analogo a createElement
import ReactDOM from "react-dom"; // analogo a appendChild

// const jsx = <h1>Hola, Amigos de React con React!!!</h1>;
// const element = React.createElement(
//   "a",
//   { href: "https://platzi.com" },
//   "Ir a platzi"
// );
// const name = "Angela";
// const sum = () => 3 + 3;
// const element = React.createElement("h1", {}, `Hola, soy ${name}`);
// const jsx = <h1>Hola soy {sum()} con JSX</h1>;

const jsx = (
  <div>
    <h1>Hola, soy Papi</h1>
    <p>Soy ingeniero frontend.</p>
  </div>
);

const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hola, soy Papi con createElement"),
  React.createElement("p", {}, "Soy ingeniero frontend.")
);

const container = document.getElementById("app");

// ReactDOM.render( que queremos renderizar, donde lo vamos a renderizar)
ReactDOM.render(element, container);
