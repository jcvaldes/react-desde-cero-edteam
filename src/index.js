import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// const root = document.getElementById("root")
// const elemento = React.createElement("h1", { className: "saludo"}, "Hola Mundo!")
// ReactDOM.render(
//   elemento,
//   document.getElementById('root')
// );
// ReactDOM.render(
//   <h1 className="saludo">Hola Mundo!</h1>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
