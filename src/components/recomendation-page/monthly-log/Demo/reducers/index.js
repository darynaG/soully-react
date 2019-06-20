import { combineReducers } from "redux";
import currentday from "./currentDay";
import data from './dataReducer';

const rootReducer = combineReducers({
  currentday,
  data
});

export default rootReducer;