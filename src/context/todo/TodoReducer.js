import {
  ADD_TODO,
  CLEAR_ALL,
  DELETE_TODO,
  SET_FILTER,
  TOGGLE_MODAL_CLEAR_ALL,
  TOGGLE_MODAL_DELETE,
  TOGGLE_TODO_STATUS,
  SET_TEXT,
  SET_TODO_TO_DELETE,
  SET_PLACEHOLDER,
  TOGGLE_ALERT,
} from "../types.js"

export default (state, action) => {
  switch (action.type) {
    default:
      return state

    case ADD_TODO:
      return {
        ...state,
        text: "",
        todos: action.payload,
      }

    case CLEAR_ALL:
      return {
        ...state,
        todos: [],
        isModalClearAllVisible: false,
        filer: null,
      }

    case DELETE_TODO:
      return {
        ...state,
        todos: action.payload,
        isModalDeleteVisible: false,
      }
    case TOGGLE_ALERT:
      return {
        ...state,
        isAlertActive: action.payload,
      }

    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      }

    case SET_PLACEHOLDER:
      return {
        ...state,
        placeholder: action.payload,
      }

    case SET_TEXT:
      return {
        ...state,
        text: action.payload,
        isAlertActive: false,
      }

    case SET_TODO_TO_DELETE:
      return {
        ...state,
        isModalDeleteVisible: true,
        todo: { ...state.todo, id: action.payload },
      }

    case TOGGLE_TODO_STATUS:
      return {
        ...state,
        todos: action.payload,
      }

    case TOGGLE_MODAL_CLEAR_ALL:
      return {
        ...state,
        isModalClearAllVisible: action.payload,
      }

    case TOGGLE_MODAL_DELETE:
      return {
        ...state,
        isModalDeleteVisible: action.payload,
      }
  }
}
