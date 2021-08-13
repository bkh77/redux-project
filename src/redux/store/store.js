import positionsReducer from "./positionsReducer";
import degreeReducer from "./degreeReducer";
import staffReducer from "./staffReducer";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: { positionsReducer, degreeReducer, staffReducer },
});
