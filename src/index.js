import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import RootReducer from "./reducers";

import Home from "./routes/home";

import "./index.css";

const enhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(RootReducer, enhancer);
const loggedIn = false;
ReactDOM.render(
  <BrowserRouter keyLength={12}>
    <Provider store={store}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (loggedIn ? <Redirect to="/dashboard" /> : <Home />)}
        />
        <Route
          render={() => {
            return <div> Page not found </div>;
          }}
        />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
