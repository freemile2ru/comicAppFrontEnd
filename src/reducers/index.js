import { combineReducers } from 'redux';
import user from './user';
import bookmark from './bookmark';
import loader from './loader';
import marvel from './marvel';

const rootReducer = combineReducers({
  user,
  bookmark,
  loader,
  marvel,
});

export default rootReducer;