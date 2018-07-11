import { combineReducers } from 'redux';
import BookReducer from './reducer_books';
import SelectedBookReducer from './reducer_selected_book';

const rootReducer = combineReducers({
  books : BookReducer,
  selectedBook : SelectedBookReducer
});

export default rootReducer;