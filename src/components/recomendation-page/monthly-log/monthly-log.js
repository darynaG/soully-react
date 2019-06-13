import React from 'react';


function Calendar(){
    return(
        <div class="calendar">
                            <div class="calendar__info">
                                    <div class="calendar__prev" id="prev-month">&#9664</div>
                                    <div class="calendar__month" id="month"></div>
                                    <div class="calendar__year" id="year"></div>
                                    <div class="calendar__next" id="next-month">&#9654</div>
                                </div>
                                <div class="calendar__week">
                                    <div class="calendar__day calendar__item">Mon</div>
                                    <div class="calendar__day calendar__item">Tue</div>
                                    <div class="calendar__day calendar__item">Wed</div>
                                    <div class="calendar__day calendar__item">Thu</div>
                                    <div class="calendar__day calendar__item">Fri</div>
                                    <div class="calendar__day calendar__item">Sat</div>
                                    <div class="calendar__day calendar__item">Sun</div>
                                </div>
                                <div class="calendar__dates" id="dates"></div>
                

                    </div>

    );
}
export default Calendar;