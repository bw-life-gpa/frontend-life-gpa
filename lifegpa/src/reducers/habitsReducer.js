import {
    USER_HABIT_REQUEST,
    USER_HABIT_SUCCESS,
    USER_HABIT_FAILURE
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
          habits:  action.payload
        };
      case USER_HABIT_FAILURE:
        return {
          ...state,
          fetchingHabit: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
