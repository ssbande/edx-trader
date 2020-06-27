import { createReducer } from 'redux-create-reducer';
import produce from "immer"
import { DATAGRID_PANEL_HEIGHT, SELECT_MENU, IS_MOBILE_VIEW } from "./actionTypes"

const initialState = {
  panel2Top: null,
  selectedMenu: ['1'],
  isMobileView: false,
  loadPercent: 0,
}

const common = createReducer(initialState, {
  [DATAGRID_PANEL_HEIGHT]: (state, action) => produce(state, draft => {
    draft.panel2Top = action.payload;
    draft.selectedMenu = ['2'];
  }),
  [SELECT_MENU]: (state, action) => produce(state, draft => { draft.selectedMenu = [action.payload]; }),
  [IS_MOBILE_VIEW]: (state, action) => produce(state, draft => { draft.isMobileView = action.payload }),
})

export default common;
