import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import counterReducer from "./reducers/counterReducer";
import buyListReducer from "./reducers/buyListReducer";
import App from "./App";

const rootReducer = combineReducers({
  counterReducer,
  buyListReducer,
});
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
