import React, { useReducer } from "react"

import { TOGGLE_MODAL_DELETE, TOGGLE_MODAL_CLEAR_ALL } from "../types"
import TodoContext from "./TodoContext"
import TodoReducer from "./TodoReducer"

const TodoState = props => {
  const initialState = {
    todos: [],
    isModalDeleteVisible: false,
    isModalClearAllVisible: false
  }

  const [state, dispatch] = useReducer(TodoReducer, initialState)

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
        todos: state.todos,
        toggleModalClearAll,
        toggleModalDelete
      }}
    >
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoState
