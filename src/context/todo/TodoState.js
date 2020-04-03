import React, { useReducer } from "react"

import {
  TOGGLE_MODAL_DELETE,
  TOGGLE_MODAL_CLEAR_ALL,
  CLEAR_ALL,
  SET_FILTER,
  EDIT_TODO,
  ADD_TODO,
  SET_ALERT,
  SET_TEXT,
  TOGGLE_TODO_STATUS,
} from "../types"
import TodoContext from "./TodoContext"
import TodoReducer from "./TodoReducer"

const TodoState = (props) => {
  const initialState = {
    alert: null,
    todos: [],
    isEditModeActive: false,
    isModalDeleteVisible: false,
    isModalClearAllVisible: false,
    filter: null,
    text: "",
    todo: {},
  }

  const [state, dispatch] = useReducer(TodoReducer, initialState)

  const addTodo = (e) => {
    e.preventDefault()

    if (state.text.length > 0) {
      if (state.isEditModeActive) {
        //const id = state.todo.id

        dispatch({ type: EDIT_TODO })
        /* setTodos(
          state.todos.map(todo => (todo.id === id ? { ...todo, title: text } : todo))
        )

        setEditMode(false)
        setText("")
        setTodo({})
        setAlert(null) */
      } else {
        console.log("Entra aqui?")
        const todo = {
          id: state.todos.length + 1,
          title: state.text,
          isActive: true,
        }
        dispatch({ type: ADD_TODO, payload: state.todos.concat(todo) })
      }
    } else {
      setAlertMessage("Please enter a title/description to your Todo!")
    }
  }

  const clearAll = () => {
    dispatch({ type: CLEAR_ALL })
  }

  const editTodo = () => {
    console.log("editTodo")
  }

  const setAlertMessage = (message) => {
    dispatch({ type: SET_ALERT, payload: message })
  }

  const setInputText = (text) => {
    dispatch({ type: SET_TEXT, payload: text })
  }

  const setFilter = (value) => {
    dispatch({ type: SET_FILTER, payload: value })
  }

  const toggleModalClearAll = (value) => {
    dispatch({ type: TOGGLE_MODAL_CLEAR_ALL, payload: value })
  }

  const toggleModalDelete = (value) => {
    dispatch({ type: TOGGLE_MODAL_DELETE, payload: value })
  }

  const toggleTodoStatus = (id) => {
    dispatch({
      type: TOGGLE_TODO_STATUS,
      payload: state.todos.map((todo) =>
        todo.id === id ? { ...todo, isActive: !todo.isActive } : todo
      ),
    })
  }

  const test = () => {
    console.log("test")
  }

  return (
    <TodoContext.Provider
      value={{
        alert: state.alert,
        isModalClearAllVisible: state.isModalClearAllVisible,
        isModalDeleteVisible: state.isModalDeleteVisible,
        filter: state.filter,
        text: state.text,
        todos: state.todos,
        addTodo,
        clearAll,
        editTodo,
        setFilter,
        setInputText,
        toggleModalClearAll,
        toggleModalDelete,
        toggleTodoStatus,
        test,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoState
