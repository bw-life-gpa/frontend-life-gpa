import {
  USER_CATEGORY_REQUEST,
  USER_CATEGORY_SUCCESS,
  USER_CATEGORY_FAILURE,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILURE,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAILURE
} from "../actions";

const initialState = {
  users: [],
  fetchingUser: false,
  deletingUser: false,
  updatingUser: false,
  addingCategory: false,
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
        users: action.payload
      };
    case USER_CATEGORY_FAILURE:
      return {
        ...state,
        fetchingUser: false,
        error: action.payload
      };
    case ADD_CATEGORY_REQUEST:
      return {
        ...state,
        addingCategory: true,
        error: null
      };
    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        addingCategory: false,
        users: action.payload
      };
    case ADD_CATEGORY_FAILURE:
      return {
        ...state,
        addingCategory: false,
        err: action.payload
      };
    case DELETE_CATEGORY_REQUEST:
      return {
        ...state,
        deletingUser: true,
        error: null
      };
    case DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        deletingUser: false,
        users: [...state.users.category, action.payload]
      };
    case DELETE_CATEGORY_FAILURE:
      return {
        ...state,
        deletingUser: false,
        error: action.payload
      };
    case UPDATE_CATEGORY_REQUEST:
      return {
        ...state,
        updatingUser: true,
        error: null
      };
    case UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        updatingUser: false,
        users: [...state.users.category, action.payload]
      };
    case UPDATE_CATEGORY_FAILURE:
      return {
        ...state,
        updatingUser: false,
        error: action.payload
      };
    default:
      return state;
  }
};
