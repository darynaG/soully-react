import * as types from '../constants/action-types'
export const prevMonth = () =>({
    type: types.CALENDAR_PREV_MONTH
})
export const nextMonth = () =>({
    type: types.CALENDAR_NEXT_MONTH
})

export const showDetail = (weekIndex, weekdayIndex) =>({
    type: types.CALENDAR_SHOW_DETAILS,
    payload: {weekIndex, weekdayIndex}

})
