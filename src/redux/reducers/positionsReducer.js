import * as types from "../actions/actionTypes";

export default function positionsReducer(
  state = {
    positions: [
      { id: 1, name: "Teamleader", salary: 2000 },
      { id: 2, name: "Manager", salary: 1500 },
      { id: 3, name: "Developer", salary: 1000 },
    ],
  },
  action
) {
  switch (action.type) {
    case types.ADD_POSITION:
      const positions = [...state.positions];
      positions.push(action.payload);
      state = {
        ...state,
        positions,
      };
      break;
    case types.COMPLETED:
      let arr = state.todos.map((item) => {
        if (item.id === action.payload) {
          item = { ...item, completed: !item.completed };
        }
        return item;
      });
      state = {
        todos: arr,
      };
      break;
    case types.DELETE_POSITION:
      const clone = [...state.positions];
      const filtered = clone.filter((i) => i.id !== action.payload);

      state = {
        ...state,
        positions: filtered,
      };
      break;
    case types.EDIT_POSITION:
      const clone2 = [...state.positions];
      clone2.splice(
        clone2.findIndex((i) => i.id === action.payload.id),
        1,
        action.payload
      );
      state = {
        ...state,
        positions: clone2,
      };
      break;
    default:
  }
  return state;
}
