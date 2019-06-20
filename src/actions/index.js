import * as actionTypes from "../constants/action-types";

export const displayDetailsDays = day => {
  return {
    type: actionTypes.DISPLAY_DETAILS_DAY,
    payload: {
      day: day
    }
  };
};
