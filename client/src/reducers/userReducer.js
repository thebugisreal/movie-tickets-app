import { LOGIN, SIGNUP, TOGGLE_MENU, LOADING, RESET } from '../constants/userTypes';

const initialState = {
  isShowMenu: false,
  isShowLoading: false,
  logged: false,
  registered: false,
  signUpErrors: {
    userName: null,
    email: null
  },
  loginErrors: {
    userName: null,
    password: null
  },
  user: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        isShowMenu: !state.isShowMenu
      }
    case LOADING:
      return {
        ...state,
        isShowLoading: true
      }
    case SIGNUP:
      if(!action.payload.success) {
        const { errors } = action.payload;
        return {
          ...state,
          signUpErrors: errors,
          isShowLoading: false
        }
      } else {
        return {
          ...state,
          registered: true,
          isShowLoading: false
        }
      }
    case LOGIN:
      if(!action.payload.success) {
        const { errors } = action.payload;
        return {
          ...state,
          loginErrors: errors,
          isShowLoading: false
        }
      } else {
        return {
          ...state,
          isShowMenu: false,
          isShowLoading: false,
          logged: true,
          user: action.payload.user
        }
      }
    case RESET:
      return {
        ...state,
        signUpErrors: {
          userName: null,
          email: null
        },
        loginErrors: {
          userName: null,
          password: null
        },
        registered: false
      }
    default: 
      return state
  }
}