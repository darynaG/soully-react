import * as types from '../constants/action-types'
export const PrevMonth = () =>({
    type: types.CALENDAR_PREV_MONTH
})
export const NextMonth = () =>({
    type: types.CALENDAR_NEXT_MONTH
})
export const NextYear = () =>({
    type: types.CALENDAR_NEXT_YEAR
})
export const PrevYear = () =>({
    type: types.CALENDAR_PREV_YEAR
})
export const EditYear = () =>({
    type: types.CALENDAR_EDIT_YEAR
})
export const ShowDetail = (weekIndex, weekdayIndex) =>({
    type: types.CALENDAR_SHOW_DETAILS.CALENDAR_EDIT_YEAR,
    payload: {weekIndex, weekdayIndex}

})