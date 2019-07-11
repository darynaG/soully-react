import {actionType} from '../constants'

export const displayDetailsDays = (day, information) => {
    return {
      type: actionType.DISPLAY_DETAILS_DAY,
      payload: {
        day: day,
        information: information
      }
    };
  };

  export const fetchDataSuccessDay = (day,information) => ({
    type: 'FETCH_DATA_SUCCESS_DAY',
    payload: { information: information,
    day:day}
});