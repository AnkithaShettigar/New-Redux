import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceReducer from './iceCream/iceCreamReducer';
import bookReducer from './books/BooksReducer';
import fetchUserReducer from './user/userReducer';
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceReducer,
  book: bookReducer,
  user: fetchUserReducer,
});

export default rootReducer;
