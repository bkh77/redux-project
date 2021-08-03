import { createStore, applyMiddleware } from "redux";
import todoReducer from './redux/todoReducer'
import logger from 'redux-logger'

export default createStore(todoReducer, applyMiddleware(logger))