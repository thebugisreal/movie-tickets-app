import { LOGIN, SIGNUP, TOGGLE_NAV_MENU } from '../constants/userTypes';

export const login = data => dispatch => {
  dispatch({
    type: LOGIN,
    payload: data
  })
}

export const signup = data => dispatch => {
  console.log(data);
  fetch('/api/users/sign-up', {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
    body: data
  })
    .then(res => res.json())
    .then(result => dispatch({
      type: SIGNUP,
      payload: result
    }));
}

export const toggleNavMenu = () => dispatch => {
  dispatch({
    type: TOGGLE_NAV_MENU
  })
}