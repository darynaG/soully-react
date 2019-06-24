import {
    SHOW_MOBILE_NAV_MENU,
    HIDE_MOBILE_NAV_MENU
}from '../constants/action-types'

const DEFAULT_STATE = {
    visibleMobileMenu: false
}
export default ( state=DEFAULT_STATE, action) => {
    switch (action.type) {
        case SHOW_MOBILE_NAV_MENU:
            return {...state, visibleMobileMenu: true};
        case HIDE_MOBILE_NAV_MENU:
            return {...state, visibleMobileMenu: false};
        default:
            return state;
    }
};