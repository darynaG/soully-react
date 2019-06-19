import * as types from '../constants/action-types'
let nextTodoId = 0
export const addStory = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const likeStory = id => ({
  type: 'LIKE_STORY',
  id
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SAD_MOOD: 'SAD_MOOD',
    HAPPY_MOOD: 'HAPPY_MOOD',
    WOW_MOOD:'WOW_MOOD',
    WTF_MOOD:'WTF_MOOD',
    EXCITED_MOOD:'EXCITED_MOOD',
    GOOD_MOOD:'GOOD_MOOD'
  }


export const PrevMonth = () =>({
    type: types.CALENDAR_PREV_MONTH
})
export const NextMonth = () =>({
    type: types.CALENDAR_NEXT_MONTH
})
export const NextYear = () =>({
    type: types.CALENDAR_NEXT_YEAR
})
export const PrevYear = () =>({
    type: types.CALENDAR_PREV_YEAR
})
export const EditYear = () =>({
    type: types.CALENDAR_EDIT_YEAR
})
export const ShowDetail = (weekIndex, weekdayIndex) =>({
    type: types.CALENDAR_SHOW_DETAILS.CALENDAR_EDIT_YEAR,
    payload: {weekIndex, weekdayIndex}

})

