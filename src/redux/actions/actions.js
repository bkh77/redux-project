import * as types from "./actionTypes";

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

export function addDegree(obj) {
  return {
    type: types.ADD_DEGREE,
    payload: obj,
  };
}

export function deleteDegree(id) {
  return {
    type: types.DELETE_DEGREE,
    payload: id,
  };
}
export function editDegree(obj) {
  return {
    type: types.EDIT_DEGREE,
    payload: obj,
  };
}

export function addStaff(obj) {
  return {
    type: types.ADD_STAFF,
    payload: obj,
  };
}

export function deleteStaff(id) {
  return {
    type: types.DELETE_STAFF,
    payload: id,
  };
}
export function editStaff(obj) {
  return {
    type: types.EDIT_STAFF,
    payload: obj,
  };
}
