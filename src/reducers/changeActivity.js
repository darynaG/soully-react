
const initialState ={
    activities : ["dsaj", "fdf"]
}
const changeActivity = (state =initialState, action) => {
    console.log ("state- ",state, "I state - ", initialState, " Action - ", action)
    switch(action.type){
    case 'SELECT_ACTIVITY':
        return {
            ...state, 
            activities: action.activities}
    default:
        return state;
    }
  }
  
  export default changeActivity;
  