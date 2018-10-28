import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import postReducer from './postReducer';

export default combineReducers({
  movies: movieReducer,
  posts: postReducer
});