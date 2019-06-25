
const initialState ={
    mood: "sad"
}
const changeMood = (state =initialState, action) => {
    switch(action.type){
    case 'CHOOSE_MOOD':
        return {
            ...state, 
            mood: action.mood}
    default:
        return state;
    }
  }
  
  export default changeMood;
  