import React, { useReducer } from "react"

import {
  TOGGLE_MODAL_DELETE,
  TOGGLE_MODAL_CLEAR_ALL,
  CLEAR_ALL,
  SET_FILTER,
  DELETE_TODO,
  EDIT_TODO,
  ADD_TODO,
  TOGGLE_ALERT,
  SET_PLACEHOLDER,
  SET_TEXT,
  TOGGLE_TODO_STATUS,
  SET_TODO_TO_DELETE,
} from "../types"
import TodoContext from "./TodoContext"
import TodoReducer from "./TodoReducer"

const TodoState = (props) => {
  const initialState = {
    todos: [],
    isAlertActive: false,
    isEditModeActive: false,
    isModalDeleteVisible: false,
    isModalClearAllVisible: false,
    filter: null,
    placeholder: "",
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
      dispatch({ type: TOGGLE_ALERT, payload: true })
    }
  }

  const clearAll = () => {
    dispatch({ type: CLEAR_ALL })
  }

  const deleteTodo = () => {
    const id = state.todo.id
    dispatch({
      type: DELETE_TODO,
      payload: state.todos.filter((todo) => todo.id !== id),
    })
  }

  const editTodo = () => {
    console.log("editTodo")
  }

  const toggleAlertMessage = (value) => {
    dispatch({ type: TOGGLE_ALERT, payload: value })
  }

  const setInputText = (text) => {
    dispatch({ type: SET_TEXT, payload: text })
  }

  const setFilter = (value) => {
    dispatch({ type: SET_FILTER, payload: value })
  }

  const setTodoToDelete = (id) => {
    dispatch({ type: SET_TODO_TO_DELETE, payload: id })
  }

  const setPlaceholder = (text) => {
    dispatch({ type: SET_PLACEHOLDER, payload: text })
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
        isAlertActive: state.isAlertActive,
        isModalClearAllVisible: state.isModalClearAllVisible,
        isModalDeleteVisible: state.isModalDeleteVisible,
        filter: state.filter,
        placeholder: state.placeholder,
        text: state.text,
        todo: state.todo,
        todos: state.todos,
        addTodo,
        clearAll,
        deleteTodo,
        editTodo,
        setFilter,
        setInputText,
        setTodoToDelete,
        setPlaceholder,
        toggleAlertMessage,
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
