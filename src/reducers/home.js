import types from "../constants";

const initialState = {
  data: [
    { name: "Eve Jacson", hobby: "Cosmetic Specialist" },
    { name: "Emmy Frost", hobby: "Professional Actress" }
  ]
};

export default function home(state = initialState, action) {
  switch (action.type) {
    case types.HOME_ADD_USER:
      let result = [...state.data].concat(action.payload);
      return { ...state, data: result };
    case types.HOME_DELETE_USER:
      result = state.data.filter(user => user.name !== action.payload.name);
      return { ...state, data: result };
    default:
      return { ...state };
  }
}
