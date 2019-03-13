import { combineReducers } from "redux";
import { dashboardReducer } from "./dashboardReducer";
import registerReducer from "./registerReducer";
import userCategoryReducer from "./userCategoryReducer";

export default combineReducers({
  dashboardReducer,
  registerReducer,
  userCategoryReducer
});
