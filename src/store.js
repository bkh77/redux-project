import { createStore, applyMiddleware, combineReducers } from "redux";
import positionsReducer from "./redux/reducers/positionsReducer";
import degreeReducer from "./redux/reducers/degreeReducer";
import logger from "redux-logger";

export default createStore(
  combineReducers({
    positionsReducer,
    degreeReducer,
  }),
  applyMiddleware(logger)
);
