import { TOGGLE_NAV_MENU } from '../constants/navTypes';

export const toggleNavMenu = () => dispatch => {
  dispatch({
    type: TOGGLE_NAV_MENU
  })
}