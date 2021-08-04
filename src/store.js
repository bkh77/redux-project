import { createStore, applyMiddleware, combineReducers } from "redux";
import pRed from "./redux/reducers/positionsReducer";
import logger from "redux-logger";

export default createStore(
  combineReducers({
    pRed,
  }),
  applyMiddleware(logger)
);
