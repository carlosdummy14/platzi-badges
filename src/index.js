// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

// import React from 'react';
// import ReactDOM from 'react-dom';

// const element = <h1>Hello, Platzi Badges!</h1>;

// const container = document.getElementById('app');

// // ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(element, container);

import React from "react"; // analogo a createElement
import ReactDOM from "react-dom"; // analogo a appendChild

const element = <h1>Hola, Amigos de React con React!!!</h1>;

const container = document.getElementById("app");

// ReactDOM.render( que queremos renderizar, donde lo vamos a renderizar)
ReactDOM.render(element, container);
