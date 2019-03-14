// import {
//     TOGGLING,
//     TOGGLING_SUCCESS,
//     TOGGLING_FAILURE
//   } from "../actions";
  
//   const initialState = {
//     habit: [],
//     updatingHabitCompleted: false,
//     reported: false,
//     error: null
//   };
  
//   export default (state = initialState, action) => {
//     switch (action.type) {
//       case TOGGLING:
//         return {
//           ...state,
//           updatingHabitCompleted: true,
//           reported: false,
//           error: null
//         };
//       case TOGGLING_SUCCESS:
//         return {
//           ...state,
//           updatingHabitCompleted: false,
//           reported: true,
//           habit:  action.payload
//         };
//       case TOGGLING_FAILURE:
//         return {
//           ...state,
//           updatingHabitCompleted: false,
//           reported: false,
//           error: action.payload
//         };

//       default:
//         return state;
//     }
//   };
