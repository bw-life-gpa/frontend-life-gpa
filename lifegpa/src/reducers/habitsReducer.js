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
  UPDATE_HABIT_FAILURE,
  TOGGLING,
  TOGGLING_SUCCESS,
  TOGGLING_FAILURE
} from "../actions";

const initialState = {
  habits: [],
  fetchingHabit: false,
  addingHabit: false,
  deletingHabit: false,
  updatingHabit: false,
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
