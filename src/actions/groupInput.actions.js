import {actionType} from '../constants'

export const chooseMood = mood => ({
    type: actionType.CHOOSE_MOOD,
    mood
  })
  
  export const selectActivity = (checked, name) => ({
    type: actionType.SELECT_ACTIVITY,
    payload: { checked, name }
  })