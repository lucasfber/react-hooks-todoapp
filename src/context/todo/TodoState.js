import React, { useReducer } from "react"

import {
  TOGGLE_MODAL_DELETE,
  TOGGLE_MODAL_CLEAR_ALL,
  CLEAR_ALL,
  SET_FILTER
} from "../types"
import TodoContext from "./TodoContext"
import TodoReducer from "./TodoReducer"

const TodoState = props => {
  const initialState = {
    todos: [1, 2],
    isModalDeleteVisible: false,
    isModalClearAllVisible: false,
    filter: null
  }

  const [state, dispatch] = useReducer(TodoReducer, initialState)

  const clearAll = () => {
    dispatch({ type: CLEAR_ALL })
  }

  const setFilter = value => {
    dispatch({ type: SET_FILTER, payload: value })
  }

  const toggleModalClearAll = value => {
    dispatch({ type: TOGGLE_MODAL_CLEAR_ALL, payload: value })
  }

  const toggleModalDelete = value => {
    dispatch({ type: TOGGLE_MODAL_DELETE, payload: value })
  }

  return (
    <TodoContext.Provider
      value={{
        isModalClearAllVisible: state.isModalClearAllVisible,
        isModalDeleteVisible: state.isModalDeleteVisible,
        filter: state.filter,
        todos: state.todos,
        clearAll,
        setFilter,
        toggleModalClearAll,
        toggleModalDelete
      }}
    >
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoState
