import {
    USER_HABIT_REQUEST,
    USER_HABIT_SUCCESS,
    USER_HABIT_FAILURE,
    TOGGLING,
    TOGGLING_SUCCESS,
    TOGGLING_FAILURE
  } from "../actions";
  
  const initialState = {
    habits: [],
    fetchingHabit: false,
    updatingHabitCompleted: false,
    reported: false,
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
          habits:  action.payload
        //   habits: [...state.habits, action.payload]
        };
    case USER_HABIT_FAILURE:
        return {
          ...state,
          fetchingHabit: false,
          error: action.payload
        };

    case TOGGLING:
        return {
          ...state,
          updatingHabitCompleted: true,
          reported: false,
          error: null
        };
    case TOGGLING_SUCCESS:
    let updatedHabit = [...state.habits];
    let habitIndex = updatedHabit.findIndex(habit => habit.id === action.payload.id);
    updatedHabit[habitIndex] = {...updatedHabit[habitIndex],
        completed: action.payload.completed,
        completionPoints: action.payload.completionPoints
    };

        return {
          ...state,
          updatingHabitCompleted: false,
          reported: true,
          habits:  updatedHabit
        };
    case TOGGLING_FAILURE:
        return {
          ...state,
          updatingHabitCompleted: false,
          reported: false,
          error: action.payload
        };
    default:
        return state;
    }
  };
