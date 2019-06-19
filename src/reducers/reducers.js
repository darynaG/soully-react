import { combineReducers } from 'redux'
import {
  CHOOSE_MOOD,
  ADD_STORY,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
  LIKE_STORY
} from '../actions/actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function storyReducer(state = [], action) {
  switch (action.type) {
    case ADD_STORY:
      return [
        ...state,
        {
          text: action.text,
          
        }
      ]
    case LIKE_STORY:
      return state.map((story, index) => {
        if (index === action.index) {
          return Object.assign({}, story, {
           
          })
        } })
    case CHOOSE_MOOD:
        return [
            ...state,
            {
                mood:action.text
            }
        ]
        
     
    default:
      return state
  }
}

const soullyApp = combineReducers({
  visibilityFilter,
  storyReducer
})

export default soullyApp