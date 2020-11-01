import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({});

const persistConfig = {
  key: "authType",
  storage: storage,
  whitelist: ["rootReducer"], // which reducer want to store
};

const pReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(thunk, logger);
const store = createStore(pReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
