import { combineReducers } from "redux";
import { dashboardReducer } from "./dashboardReducer";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import userCategoryReducer from "./userCategoryReducer";

export default combineReducers({
  dashboardReducer,
  registerReducer,
  userCategoryReducer,
  loginReducer
});
