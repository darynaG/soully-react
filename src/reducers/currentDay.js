import * as actionTypes from "../constants/action-types";

const initialState = "";

const currentday = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_DETAILS_DAY:
      return action.payload.day;
    default:
      return state;
  }
};

export default currentday;