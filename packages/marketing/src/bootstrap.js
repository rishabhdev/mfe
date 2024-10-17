import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

console.log("App bootstrap");

const mount = (el) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>, el
  );
};

console.log('process', process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_marketing-dev-root");
  console.log('el', el);
  if (el) {
    mount(el);
  }
}

export { mount };
