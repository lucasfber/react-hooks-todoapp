import React, { useReducer } from "react"

import TodoContext from "./TodoContext"
import TodoReducer from "./TodoReducer"

const TodoState = props => {
  const initialState = {
    todos: []
  }

  const [state, dispatch] = useReducer(TodoReducer, initialState)

  const test = () => {
    dispatch({ type: "TEST", payload: 989 })
  }

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        test
      }}
    >
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoState
