import { combineReducers } from "redux";
import currentday from "./currentDay";
import memos from "./memos";
import data from './dataReducer';

const rootReducer = combineReducers({
  currentday,
  memos,
  data
});

export default rootReducer;