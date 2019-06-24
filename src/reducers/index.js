
import { combineReducers } from "redux";
import currentday from "./currentDay";
import changeMood from './changeMood';
import burgerMenu from './burgerMenuReducer';

const rootReducer = combineReducers({
  currentday,
  changeMood,
  burgerMenu
});

export default rootReducer;

