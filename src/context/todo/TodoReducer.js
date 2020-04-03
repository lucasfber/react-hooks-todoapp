import {
  CLEAR_ALL,
  SET_FILTER,
  TOGGLE_MODAL_CLEAR_ALL,
  TOGGLE_MODAL_DELETE
} from "../types.js"

export default (state, action) => {
  switch (action.type) {
    default:
      return state

    case CLEAR_ALL:
      return {
        ...state,
        todos: [],
        isModalClearAllVisible: false,
        filer: null
      }

    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      }

    case TOGGLE_MODAL_CLEAR_ALL:
      return {
        ...state,
        isModalClearAllVisible: action.payload
      }

    case TOGGLE_MODAL_DELETE:
      return {
        ...state,
        isModalDeleteVisible: action.payload
      }
  }
}
