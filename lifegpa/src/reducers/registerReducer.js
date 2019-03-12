import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE } from "../actions";

const initialState = {
  users: [],
  registering: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        registering: true,
        error: null
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registering: false,
        users: [...state.users, action.payload]
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        registering: false,
        error: action.payload
      };
    default:
      return state;
  }
};
