import { combineReducers } from "redux";
import dashboardReducer from "./dashboardReducer";
import habitsReducer from "./habitsReducer";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import userCategoryReducer from "./userCategoryReducer";

export default combineReducers({
  dashboardReducer,
  habitsReducer,
  loginReducer,
  registerReducer,
  userCategoryReducer
});
