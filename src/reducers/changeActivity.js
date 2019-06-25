
const initialState ={
        
  water: false,
  sport: false,
  lazy: false ,
  walking: false,
  hiking: false ,
  running : false,
  date: false,
  birthday: false,
  party: false,
  charity: false 
}
const changeActivity = (state =initialState, action) => {
    console.log ("state- ",state, "I state - ", initialState, " Action - ", action)
    switch(action.type){
    case 'SELECT_ACTIVITY':
        console.log(" IN REDUCER   ", action.name, " IN REDUCER   ", action.checked)
        return {
            ...state, 
            [action.name] : action.checked
            
        }    
    default:
        return state;
    }
  }
  
  export default changeActivity;
  