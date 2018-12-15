import types from "../constants";

export default function home(state, action) {
  switch (action.type) {
    case types.HOME_ADD_USER:
      break;
    case types.HOME_DELETE_USER:
      break;
    default:
      break;
  }
  return { ...action.payload };
}
