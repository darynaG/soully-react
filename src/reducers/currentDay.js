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
      return {...state,
        day: action.payload.day,
        information: action.payload.information

       }
    case 'FETCH_DATA_SUCCESS_DAY':
        return {
            ...state,
            information: action.payload.information
            // moods:action.payload.information.moods,
            // activities:action.payload.information.activities,
            // stories:action.payload.information.stories,
            // username:action.payload.information.username

      };
    default:
      return state;
  }
};

export default currentday;