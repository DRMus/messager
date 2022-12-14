import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const store = configureStore(
  {reducer: rootReducer},
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
