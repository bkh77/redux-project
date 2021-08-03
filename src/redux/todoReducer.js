import * as types from "./actionTypes";

export default function todoReducer(
  state = {
    todos: [
      { id: 1, title: "task1", completed: false },
      { id: 2, title: "task2", completed: true },
      { id: 3, title: "task3", completed: false },
    ],
  },
  action
) {
  switch (action.type) {
    case types.ADD_TASK:
      const todos = [...state.todos];
      todos.push({
        id: state.todos.length + 1,
        title: action.payload,
        templated: false,
      });
      state = {
        ...state,
        todos,
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
    default:
  }
  return state;
}
