import * as types from './actionTypes'

export function addTask(title) {
  return {
    type: types.ADD_TASK,
    payload: title,
  };
}
export function hadleCheck(id) {
  return {
    type: types.COMPLETED,
    payload: id,
  };
}
