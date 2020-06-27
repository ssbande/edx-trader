import { createReducer } from 'redux-create-reducer';
import produce from "immer"
import { SET_ACTION, CLEAR_DATA, SET_SYMBOL, SET_QUANTITY, SET_ORDER_TYPE, SET_PRICE, SET_STOP_PRICE, SET_COMMENT, SET_TIF } from "./actionTypes"

const initialState = {
  action: 'action',
  symbol: null,
  quantity: null,
  orderType: 'orderType',
  price: null,
  stopPrice: null,
  comment: null,
  tif: null
}

const entry = createReducer(initialState, {
  [SET_ACTION]: (state, action) => produce(state, draft => { draft.action = action.payload; }),
  [SET_SYMBOL]: (state, action) => produce(state, draft => { draft.symbol = action.payload; }),
  [SET_QUANTITY]: (state, action) => produce(state, draft => { draft.quantity = action.payload; }),
  [SET_ORDER_TYPE]: (state, action) => produce(state, draft => { draft.orderType = action.payload; }),
  [SET_PRICE]: (state, action) => produce(state, draft => { draft.price = action.payload; }),
  [SET_STOP_PRICE]: (state, action) => produce(state, draft => { draft.stopPrice = action.payload; }),
  [SET_COMMENT]: (state, action) => produce(state, draft => { draft.comment = action.payload; }),
  [SET_TIF]: (state, action) => produce(state, draft => { draft.tif = action.payload; }),
  [CLEAR_DATA]: (state, action) => produce(state, draft => {
    draft.action = 'action';
    draft.symbol = '';
    draft.quantity = null;
    draft.orderType = 'orderType';
    draft.price = null; 
    draft.stopPrice = null; 
    draft.comment = null; 
    draft.tif = null;
  })
})

export default entry;
