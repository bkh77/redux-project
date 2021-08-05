import { createStore, applyMiddleware, combineReducers } from "redux";
import positionsReducer from "./redux/reducers/positionsReducer";
import degreeReducer from "./redux/reducers/degreeReducer";
import staffReducer from './redux/reducers/staffReducer'
import logger from "redux-logger";

export default createStore(
  combineReducers({
    positionsReducer,
    degreeReducer,
    staffReducer
  }),
  applyMiddleware(logger)
);
