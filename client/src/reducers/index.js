import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import postReducer from './postReducer';
import navReducer from './navReducer';

export default combineReducers({
  movies: movieReducer,
  posts: postReducer,
  nav: navReducer
});