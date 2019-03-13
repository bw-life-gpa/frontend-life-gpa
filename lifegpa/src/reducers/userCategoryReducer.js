import {
  USER_CATEGORY_REQUEST,
  USER_CATEGORY_SUCCESS,
  USER_CATEGORY_FAILURE
} from "../actions";

const initialState = {
  users: [],
  fetchingUser: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_CATEGORY_REQUEST:
      return {
        ...state,
        fetchingUser: true,
        error: null
      };
    case USER_CATEGORY_SUCCESS:
      return {
        ...state,
        fetchingUser: false,
        users: [...state.users, action.payload]
      };
    case USER_CATEGORY_FAILURE:
      return {
        ...state,
        fetchingUser: false,
        error: action.payload
      };
    default:
      return state;
  }
};
