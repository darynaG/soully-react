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
  type: 'TOGGLE_TODO',
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