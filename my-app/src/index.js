import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Store from "./Store";
import App from "./test";
// import { createStore } from "redux";
import registerServiceWorker from "./registerServiceWorker";
import reducer1 from "./reducer1";
import reducer from "./reducer";
import { Provider } from "react-redux";

// const store = createStore(reducer);
//

const render = () =>
  ReactDOM.render(
    <Provider store={Store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
render();
Store.subscribe(render);
registerServiceWorker();
