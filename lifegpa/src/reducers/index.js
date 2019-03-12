import { combineReducers } from "redux";
import { dashboardReducer } from "./dashboardReducer";
import registerReducer from "./registerReducer";

export default combineReducers({
  dashboardReducer,
  registerReducer
});
