
import { combineReducers } from "redux";
import currentday from "./currentDay";
import changeMood from './changeMood';
import burgerMenu from './burgerMenuReducer';

import changeActivity from './changeActivity';
import {posts, postsLikes, postsLikeCounters} from './reducerLike'

const rootReducer = combineReducers({
  currentday,
  changeMood,
  burgerMenu,
  posts,
  postsLikes,
  postsLikeCounters,
  changeActivity
});

export default rootReducer;

