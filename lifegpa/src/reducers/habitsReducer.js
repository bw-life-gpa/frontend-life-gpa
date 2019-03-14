import {
  USER_HABIT_REQUEST,
  USER_HABIT_SUCCESS,
  USER_HABIT_FAILURE,
  ADD_HABIT_REQUEST,
  ADD_HABIT_SUCCESS,
  ADD_HABIT_FAILURE,
  DELETE_HABIT_REQUEST,
  DELETE_HABIT_SUCCESS,
  DELETE_HABIT_FAILURE,
  UPDATE_HABIT_REQUEST,
  UPDATE_HABIT_SUCCESS,
  UPDATE_HABIT_FAILURE
} from "../actions";

const initialState = {
  habits: [
    // {   "id": 2,
    //     "habitTitle": "Run 10km",
    //     "category": "Health",
    //     "completed": false,
    //     "completionPoints": 1,
    //     "userId": 2,
    //     "created_at": "2019-03-10 19:59:15"},
    // {   "id": 3,
    //     "habitTitle": 'Clean Garage',
    //     "category": "House",
    //     "completed": false,
    //     "completionPoints": 0,
    //     "userId": 2,
    //     "created_at": "2019-03-09 19:59:15"},
    // {   "id": 4,
    //     "habitTitle": "Make Money",
    //     "category": "Work",
    //     "completed": false,
    //     "completionPoints": 0,
    //     "userId": 2,
    //     "created_at": "2019-03-08 19:59:15"},
    // {   "id": 5,
    //     "habitTitle": "Workout",
    //     "category": "Health",
    //     "completed": false,
    //     "completionPoints": 2,
    //     "userId": 2,
    //     "created_at": "2019-03-08 19:59:15"},
    // {   "id": 6,
    //     "habitTitle": 'Make Dinner',
    //     "category": "House",
    //     "completed": false,
    //     "completionPoints": 3,
    //     "userId": 2,
    //     "created_at": "2019-03-09 19:59:15"},
    // {   "id": 7,
    //     "habitTitle": "File Documents",
    //     "category": "Work",
    //     "completed": false,
    //     "completionPoints": 2,
    //     "userId": 2,
    //     "created_at": "2019-03-09 19:59:15"},
  ],
  fetchingHabit: false,
  addingHabit: false,
  deletingHabit: false,
  updatingHabit: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_HABIT_REQUEST:
      return {
        ...state,
        fetchingHabit: true,
        error: null
      };
    case USER_HABIT_SUCCESS:
      return {
        ...state,
        fetchingHabit: false,
        //   habits: [...state.habits, action.payload]
        habits: action.payload
      };
    case USER_HABIT_FAILURE:
      return {
        ...state,
        fetchingHabit: false,
        error: action.payload
      };
    case ADD_HABIT_REQUEST:
      return {
        ...state,
        addingHabit: true,
        error: null
      };
    case ADD_HABIT_SUCCESS:
      return {
        ...state,
        addingHabit: false,
        habits: [...state.habits, action.payload]
      };
    case ADD_HABIT_FAILURE:
      return {
        ...state,
        addingHabit: false,
        error: action.payload
      };
    case DELETE_HABIT_REQUEST:
      return {
        ...state,
        deletingHabit: true,
        error: null
      };
    case DELETE_HABIT_SUCCESS:
      return {
        ...state,
        deletingHabit: false
      };
    case DELETE_HABIT_FAILURE:
      return {
        ...state,
        deletingHabit: false,
        error: action.payload
      };
    case UPDATE_HABIT_REQUEST:
      return {
        ...state,
        updatingHabit: true,
        error: null
      };
    case UPDATE_HABIT_SUCCESS:
      return {
        ...state,
        updatingHabit: false
      };
    case UPDATE_HABIT_FAILURE:
      return {
        ...state,
        updatingHabit: false,
        error: action.payload
      };
    default:
      return state;
  }
};
