import {actionType} from '../constants'

export const displayDetailsDays = day => {
    return {
      type: actionType.DISPLAY_DETAILS_DAY,
      payload: {
        day: day
      }
    };
  };