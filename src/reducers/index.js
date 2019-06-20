
import { combineReducers } from "redux";
import currentday from "./currentDay";
import changeMood from './changeMood'

const rootReducer = combineReducers({
  currentday,
  changeMood
});

export default rootReducer;

