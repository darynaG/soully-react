import * as types from '../constants/action-types'

const initialState ={
    activities : "run"
}
const chooseActivity = (state =initialState, action) => {
    switch(action.type){
    case 'SELECT_ACTIVITY':
        return {
            ...state, 
            activities: action.activities}
    case 'UNSELECT_ACTIVITY':
        return {
            ...state, 
            activities: action.activities}
    default:
        return state;
    }
  }
  
  export default chooseActivity;
  