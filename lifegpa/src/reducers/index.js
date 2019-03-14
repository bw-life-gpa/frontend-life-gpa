import { combineReducers } from "redux";
// import dailyReducer from "./dailyReducer";
import dashboardReducer from "./dashboardReducer";
import habitsReducer from "./habitsReducer";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import userCategoryReducer from "./userCategoryReducer";

export default combineReducers({
  // dailyReducer,
  dashboardReducer,
  habitsReducer,
  loginReducer,
  registerReducer,
  userCategoryReducer
});
