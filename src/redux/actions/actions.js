import * as types from "./actionTypes";

export function hadleCheck(id) {
  return {
    type: types.COMPLETED,
    payload: id,
  };
}
export function addPosition(obj) {
  return {
    type: types.ADD_POSITION,
    payload: obj,
  };
}
export function deletePosition(id) {
  return {
    type: types.DELETE_POSITION,
    payload: id,
  };
}
export function editPosition(obj) {
  return {
    type: types.EDIT_POSITION,
    payload: obj,
  };
}
