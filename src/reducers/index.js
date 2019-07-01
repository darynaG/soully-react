
import { combineReducers } from "redux";
import currentday from "./currentDay";
import changeMood from './changeMood';
import changeActivity from './changeActivity';
import dataReducer from './dataReducer'
import loadingReducer from './loadReducer'
import {posts, postsLikes, postsLikeCounters} from './reducerLike'

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  currentday,
  changeMood,
  posts,
  postsLikes,
  postsLikeCounters,
  changeActivity,
  dataReducer,
  loadingReducer,
  authentication,
  registration,
  users,
  alert
});

export default rootReducer;

