import { actionType } from "../constants/actionTypes.constants";

const initialState = {
day: "",
information:{
  // moods:[],
  // activities:[],
  // stories:[],
  // username:""
}

};

const currentday = (state = initialState, action) => {
  switch (action.type) {
    case actionType.DISPLAY_DETAILS_DAY:
      return {
        ...state,
        day: action.payload.day
        
      }
    default:
      return state;
  }
};

export default currentday;