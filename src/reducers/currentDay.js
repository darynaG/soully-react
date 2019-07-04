import {actionType} from "../constants/actionTypes.constants";

const initialState = "";

const currentday = (state = initialState, action) => {
  switch (action.type) {
    case actionType.DISPLAY_DETAILS_DAY:
      return action.payload.day;
    default:
      return state;
  }
};

export default currentday;