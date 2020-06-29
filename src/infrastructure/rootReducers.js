import { combineReducers } from 'redux';

import common from './commonReducer';
import entry from './entryReducer';
import orders from './orderReducer';

export default combineReducers({
  common,
  entry,
  orders
});