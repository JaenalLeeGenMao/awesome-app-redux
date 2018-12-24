import types from "../constants";

const addUser = payload => (dispatch, getState) => {
  return dispatch({ type: types.HOME_ADD_USER, payload });
};

const deleteUser = payload => (dispatch, getState) => {
  return dispatch({ type: types.HOME_DELETE_USER, payload });
};

export default {
  addUser,
  deleteUser
};
