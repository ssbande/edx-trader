import { createReducer } from 'redux-create-reducer';
import produce from "immer";
import moment from 'moment';
import { SUBMIT_ORDER } from "./actionTypes"

const initialState = {
  orders: [],
  lastUpdatedDate: null,
  sessionOrderCount: 0,
  orderSubmitSuccess: true
}

const entry = createReducer(initialState, {
  [SUBMIT_ORDER]: (state, action) => produce(state, draft => {
    draft.sessionOrderCount = state.sessionOrderCount + 1;
    if (draft.sessionOrderCount % 2 === 0) {
      draft.orderSubmitSuccess = false;
    } else {
      draft.orderSubmitSuccess = true;
      draft.orders = [...state.orders, { ...action.payload }];
      draft.lastUpdatedDate = moment(Date.now()).format("YYYY-MM-DD hh:mm A");
    }
  })
})

export default entry;
