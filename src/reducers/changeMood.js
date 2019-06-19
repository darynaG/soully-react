import * as types from '../constants/action-types'
import { CHOOSE_MOOD } from '../actions/actions';
const initialState ={
    mood: "sad"
}
const changeMood = (state =initialState, action) => {
    switch(action.type){
    case 'CHOOSE_MOOD':
        return {mood: action.mood}
    default:
        return state;
    }
  }
  
  export default changeMood;
  