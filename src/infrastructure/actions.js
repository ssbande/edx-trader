import { DATAGRID_PANEL_HEIGHT, SELECT_MENU } from './actionTypes';

export const changePanelHeight = (val) => dispatch => {
  dispatch({
    type: DATAGRID_PANEL_HEIGHT,
    payload: val
  })
}

export const selectMenu  = (val) => dispatch => {
  dispatch({
    type: SELECT_MENU,
    payload: val
  })
}