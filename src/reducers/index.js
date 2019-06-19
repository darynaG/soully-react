import { combineReducers } from 'redux'
import changeMood from './changeMood'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  changeMood
})