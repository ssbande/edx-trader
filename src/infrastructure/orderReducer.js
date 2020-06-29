import { createReducer } from 'redux-create-reducer';
import produce from "immer";
import moment from 'moment';

import { SUBMIT_ORDER } from "./actionTypes"
import Constants from '../content/constants'

const initialState = {
  orders: [],
  lastUpdatedDate: null,
  sessionOrderCount: 0,
  orderSubmitSuccess: true
}

const entry = createReducer(initialState, {
  [SUBMIT_ORDER]: (state, action) => produce(state, draft => {
    draft.sessionOrderCount = state.sessionOrderCount + 1;
    if (draft.sessionOrderCount % Constants.failOrderNumber === 0) {
      draft.orderSubmitSuccess = false;
    } else {
      draft.orderSubmitSuccess = true;
      draft.orders = [...state.orders, { ...action.payload }];
      draft.lastUpdatedDate = moment(Date.now()).format(Constants.lastUpdatedTimeFormat);
    }
  })
})

export default entry;
