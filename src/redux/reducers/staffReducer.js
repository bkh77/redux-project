import * as types from '../actions/actionTypes'

function staffReducer(
  state = {
    staffs: [
      {
        id: 1,
        firstName: "Bakhtiyor",
        lastName: "Khasanov",
        phone: 990000101,
        position: 1,
        degree: 1,
      },
      {
        id: 2,
        firstName: "Stive",
        lastName: "Jobs",
        phone: 990000102,
        position: 2,
        degree: 2,
      },
      {
        id: 3,
        firstName: "Jeff",
        lastName: "Bezos",
        phone: 990000103,
        position: 3,
        degree: 3,
      },
      {
        id: 4,
        firstName: "Elon",
        lastName: "Musk",
        phone: 990000104,
        position: 2,
        degree: 1,
      },
    ],
  },
  action
) {
  switch (action.type) {
    case types.ADD_STAFF:
        const staffs = [...state.staffs];
        staffs.push(action.payload);
        state = {
          ...state,
          staffs,
        };
        break;
      case types.DELETE_STAFF:
        const clone = [...state.staffs];
        const filtered = clone.filter((i) => i.id !== action.payload);
  
        state = {
          ...state,
          staffs: filtered,
        };
        break;
      case types.EDIT_STAFF:
        const clone2 = [...state.staffs];
        clone2.splice(
          clone2.findIndex((i) => i.id === action.payload.id),
          1,
          action.payload
        );
        state = {
          ...state,
          staffs: clone2,
        };
        break;
        default:
  }
  return state;
}
export default staffReducer;
