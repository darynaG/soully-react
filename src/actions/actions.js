/*
 * action types
 */

export const CHOOSE_MOOD = 'CHOOSE_MOOD'
export const ADD_STORY = 'ADD_STORY'
export const LIKE_STORY = 'LIKE_STORY'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SAD_MOOD: 'SAD_MOOD',
    HAPPY_MOOD: 'HAPPY_MOOD',
    WOW_MOOD:'WOW_MOOD',
    WTF_MOOD:'WTF_MOOD',
    EXCITED_MOOD:'EXCITED_MOOD',
    GOOD_MOOD:'GOOD_MOOD'
  }

/*
 * action creators
 */
export const chooseMood = text => ({
  type: 'CHOOSE_MOOD',
  text
})

export function addStory(text) {
  return { type: ADD_STORY, text}
}
export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
  }
export function likeStory(index){
    return { type: LIKE_STORY, index}
}