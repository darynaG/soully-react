import {
    SHOW_MOBILE_NAVIGATION_MENU,
    HIDE_MOBILE_NAVIGATION_MENU,
  } from "../actions/BurgerActions";
  
  const DEFAULT_STATE = {
    visibleMobileMenu: false
  }
  
  export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
      case SHOW_MOBILE_NAVIGATION_MENU:
        return { ...state, visibleMobileMenu: true };
      case HIDE_MOBILE_NAVIGATION_MENU:
        return { ...state, visibleMobileMenu: false };
      default:
        return state;
    }
  };