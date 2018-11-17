import { TOGGLE_NAV_MENU } from '../constants/navTypes';

const initialState = {
  navMenu: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case TOGGLE_NAV_MENU:
      return {
        ...state,
        navMenu: !state.navMenu
      }
    default:
      return state;
  }
}