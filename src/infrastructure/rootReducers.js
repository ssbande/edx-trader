import { combineReducers } from 'redux';
import common from './commonReducer';
import entry from './entryReducer';

export default combineReducers({
  common,
  entry
});