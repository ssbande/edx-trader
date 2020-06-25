import { DATAGRID_PANEL_HEIGHT, SELECT_MENU } from "./actionTypes"

const initialState = {
  panel2Top: null,
  selectedMenu: ['1']
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DATAGRID_PANEL_HEIGHT:
      return { ...state, panel2Top: action.payload, selectedMenu: ['2'] }
    case SELECT_MENU:
      console.log('selecting menu: ', action);
      return { ...state, selectedMenu: [action.payload] }
    default:
      return state
  }
}

