import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "./reducers";
import "./index.css";
import App from "./routes/home";

const enhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(RootReducer, enhancer);
console.log(store);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
