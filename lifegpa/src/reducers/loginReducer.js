import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions";

const initialState = {
  id: "",
  logging: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        logging: true,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        id: action.payload,
        logging: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        logging: false,
        error: action.payload
      };
    default:
      return state;
  }
};
