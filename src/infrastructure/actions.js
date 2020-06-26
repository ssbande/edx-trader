import { DATAGRID_PANEL_HEIGHT, SELECT_MENU, IS_MOBILE_VIEW, SET_ACTION, SET_SYMBOL, SET_QUANTITY, SET_ORDER_TYPE, SET_PRICE, SET_STOP_PRICE, SET_COMMENT, SET_TIF } from './actionTypes';

//#region Common Actions 

export const changePanelHeight = (val) => dispatch => {
  dispatch({
    type: DATAGRID_PANEL_HEIGHT,
    payload: val
  })
}

export const selectMenu = (val) => dispatch => {
  dispatch({
    type: SELECT_MENU,
    payload: val
  })
}

export const setIsMobileView = (val) => dispatch => {
  dispatch({
    type: IS_MOBILE_VIEW,
    payload: val
  })
}

//#endregion

//#region Entry Actions 

export const setAction = (val) => dispatch => {
  dispatch({
    type: SET_ACTION,
    payload: val
  })
}

export const setSymbol = (val) => dispatch => {
  dispatch({
    type: SET_SYMBOL,
    payload: val
  })
}

export const setQuantity = (val) => dispatch => {
  dispatch({
    type: SET_QUANTITY,
    payload: val
  })
}

export const setOrderType = (val) => dispatch => {
  dispatch({
    type: SET_ORDER_TYPE,
    payload: val
  })
}

export const setPrice = (val) => dispatch => {
  dispatch({
    type: SET_PRICE,
    payload: val
  })
}

export const setStopPrice = (val) => dispatch => {
  dispatch({
    type: SET_STOP_PRICE,
    payload: val
  })
}

export const setComment = (val) => dispatch => {
  dispatch({
    type: SET_COMMENT,
    payload: val
  })
}

export const setTif = (val) => dispatch => {
  dispatch({
    type: SET_TIF,
    payload: val
  })
}

//#endregion
