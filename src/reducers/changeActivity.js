
const initialState = {

    water: false,
    sport: false,
    lazy: false,
    walking: false,
    hiking: false,
    running: false,
    date: false,
    birthday: false,
    party: false,
    charity: false
}
const changeActivity = (state = initialState, action) => {

    switch (action.type) {
        case 'SELECT_ACTIVITY':
            return {
                ...state,
                [action.name]: action.checked

            }
        default:
            return state;
    }
}

export default changeActivity;
