export const SHOW_MOBILE_NAVIGATION_MENU = "SHOW_MOBILE_NAVIGATION_MENU";
export const HIDE_MOBILE_NAVIGATION_MENU = "HIDE_MOBILE_NAVIGATION_MENU";

export function showMobileNavigationMenu() {
  return {
    type: SHOW_MOBILE_NAVIGATION_MENU,
  };
}
export function hideMobileNavigationMenu() {
  return {
    type: HIDE_MOBILE_NAVIGATION_MENU,
  };
}