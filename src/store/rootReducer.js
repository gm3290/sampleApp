import {combineReducers} from 'redux';
import search from './ducks/search';

const rootReducer = combineReducers({
  search,
});

export default rootReducer;
