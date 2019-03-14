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
  UPDATE_CATEGORY_FAILURE,
  GET_HABITS_BY_CATEGORY_REQUEST,
  GET_HABITS_BY_CATEGORY_SUCCESS,
  GET_HABITS_BY_CATEGORY_FAILURE,
} from "../actions";

const initialState = {
  users: [],
  category: [],
  fetchingCategory: false,
  deletingCategory: false,
  updatingCategory: false,
  addingCategory: false,
  habits: [],
  fetchingHabits: false,
  gotHabits: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_CATEGORY_REQUEST:
      return {
        ...state,
        fetchingCategory: true,
        error: null
      };
    case USER_CATEGORY_SUCCESS:
      return {
        ...state,
        fetchingCategory: false,
        category: action.payload
      };
    case USER_CATEGORY_FAILURE:
      return {
        ...state,
        fetchingCategory: false,
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
        category: [...state.category, action.payload]
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
        deletingCategory: true,
        error: null
      };
    case DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        deletingCategory: false
      };
    case DELETE_CATEGORY_FAILURE:
      return {
        ...state,
        deletingCategory: false,
        error: action.payload
      };
    case UPDATE_CATEGORY_REQUEST:
      return {
        ...state,
        updatingCategory: true,
        error: null
      };
    case UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        updatingCategory: false
      };
    case UPDATE_CATEGORY_FAILURE:
      return {
        ...state,
        updatingCategory: false,
        error: action.payload
      };
      case GET_HABITS_BY_CATEGORY_REQUEST:
      return {
        ...state,
        fetchingHabits: true,
        gotHabits: false,
        error: null
      };
    case GET_HABITS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        fetchingHabits: false,
        gotHabits: true,
        habits: action.payload
      };
    case GET_HABITS_BY_CATEGORY_FAILURE:
      return {
        ...state,
        fetchingHabits: false,
        gotHabits: false,
        error: action.payload
      };
    default:
      return state;
  }
};
