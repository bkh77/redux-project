import * as types from "../actions/actionTypes";

export default function degreeReducer(
  state = {
    degrees: [
      { id: 1, name: "Junior", bonus: 10 },
      { id: 2, name: "Middle", bonus: 15 },
      { id: 3, name: "Senior", bonus: 30 },
    ],
  },
  action
) {
  switch (action.type) {
    case types.ADD_DEGREE:
      const degrees = [...state.degrees];
      degrees.push(action.payload);
      state = {
        ...state,
        degrees,
      };
      break;
    
    case types.DELETE_DEGREE:
      const clone = [...state.degrees];
      const filtered = clone.filter((i) => i.id !== action.payload);

      state = {
        ...state,
        degrees: filtered,
      };
      break;
    case types.EDIT_DEGREE:
      const clone2 = [...state.degrees];
      clone2.splice(
        clone2.findIndex((i) => i.id === action.payload.id),
        1,
        action.payload
      );
      state = {
        ...state,
        degrees: clone2,
      };
      break;
    default:
  }
  return state;
}
