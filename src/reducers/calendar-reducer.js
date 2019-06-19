import moment from 'moment'
import guid from '../utils/uuid'

const createCalendarMonth = (startWeek, endWeek) => {
  const monthArray = []
  for (
    let weekIndex = startWeek, weekArrayIndex = 0;
    weekIndex < endWeek + 1;
    weekIndex++, weekArrayIndex++
  ) {
    const weekUuid = guid()
    monthArray.push({
      uuid: weekUuid,
      weekIndex,
      index: weekArrayIndex,
      days:
        Array(7)
        .fill({ id: 0 })
        .map((item, index) => {
          return {
            uuid: guid(),
            parentWeekUuid: weekUuid, 
            date: moment() 
              .week(weekIndex) 
              .startOf('week') 
              .clone() 
              .add(index, 'day'),
            weekIndex,
            index: index,
            day_logs: {} 
          }
        })
    })
  }
  return monthArray
}

const initialStartWeek = moment().startOf('month').add(0, 'month').week()
const initialEndWeek = moment().endOf('month').add(0, 'month').week()
const currentMonth = createCalendarMonth(initialStartWeek, initialEndWeek)

const initialState = {
  currentMonthIndex: 0,
  month: currentMonth,
  year: { 0: currentMonth } 
}

function calendarReducer (state = initialState, action) {
  switch (action.type) {
    case 'CALENDAR_PREV_MONTH': {
      const prevMonthIndex = state.currentMonthIndex - 1
      const updatedStartWeek = moment().startOf('month').add(prevMonthIndex, 'month').week()
      const updatedEndWeek = moment().endOf('month').add(prevMonthIndex, 'month').week()

      const updatedYearCalendar = {
        ...state.year,
        [state.currentMonthIndex]: state.month,
        [prevMonthIndex]: state.year[prevMonthIndex] ?  state.year[prevMonthIndex] : createCalendarMonth(updatedStartWeek, updatedEndWeek)
      }

      return {
        ...state,
        currentMonthIndex: prevMonthIndex,
        month: updatedYearCalendar[prevMonthIndex],
        year: updatedYearCalendar
      }
    }
    case 'CALENDAR_NEXT_MONTH': {
      const nextMonthIndex = state.currentMonthIndex + 1
      const updatedStartWeek = moment().startOf('month').add(nextMonthIndex, 'month').week()
      const updatedEndWeek = moment().endOf('month').add(nextMonthIndex, 'month').week()

      const updatedYearCalendar = {
        ...state.year,
        [state.currentMonthIndex]: state.month,
        [nextMonthIndex]: state.year[nextMonthIndex] ?  state.year[nextMonthIndex] : createCalendarMonth(updatedStartWeek, updatedEndWeek)
      }

      return {
        ...state,
        currentMonthIndex: nextMonthIndex,
        month: updatedYearCalendar[nextMonthIndex],
        year: updatedYearCalendar
      }
    }
    case 'CALENDAR_SHOW_DETAILS': {
      const detailMonth = state.month.map((week, index) => {
        if (action.payload.weekIndex === index) {
          const dayToDetail = week.days[action.payload.weekdayIndex];
          return dayToDetail;
         
        }
      })
    }
    default:
      return state
  }
}

export default calendarReducer