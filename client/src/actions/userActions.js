import { USR_LOGIN, TOGGLE_NAV_MENU } from '../constants/userTypes';

export const userLogin = data => dispatch => {
  dispatch({
    type: USR_LOGIN,
    payload: data
  })
}

export const toggleNavMenu = () => dispatch => {
  dispatch({
    type: TOGGLE_NAV_MENU
  })
}