import {
  TOGGLE_MODAL_CLEAR_ALL,
  TOGGLE_MODAL_DELETE,
  CLEAR_ALL
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
