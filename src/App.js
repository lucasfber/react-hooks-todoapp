import React, { useState } from "react"
import "./App.scss"

import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import Filter from "./components/Filter"

const App = () => {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState("")
  const [filter, setFilter] = useState(null)
  const [alert, setAlert] = useState(null)
  const [editMode, setEditMode] = useState(false)
  const [todo, setTodo] = useState({})

  const addTodo = e => {
    e.preventDefault()

    if (text.length > 0) {
      if (editMode) {
        const id = todo.id

        setTodos(
          todos.map(todo => (todo.id === id ? { ...todo, title: text } : todo))
        )

        setEditMode(false)
        setText("")
        setTodo({})
        setAlert(null)
      } else {
        const todo = { id: todos.length + 1, title: text, isActive: true }
        setTodos(todos.concat(todo))
        setText("")
      }
    } else {
      setAlert("Please enter a title/description to your Todo!")
    }
  }

  const changeInput = e => {
    setText(e.target.value)
    setAlert(null)
  }

  const toogleStatus = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isActive: !todo.isActive } : todo
      )
    )
  }

  const changeFilter = filter => {
    setFilter(filter)
  }

  const clearAll = () => {
    setTodos([])
    setFilter(null)
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const changeEditMode = id => {
    const todo = todos.filter(todo => todo.id === id)[0]

    setTodo(todo)
    setText(todo.title)
    setEditMode(true)
  }

  const filterTodos = () => {
    return filter === null
      ? todos
      : todos.filter(todo => todo.isActive === filter)
  }

  const viewAllTodos = () => {
    setFilter(null)
  }

  return (
    <div className="App">
      <div className="container">
        <TodoForm
          alert={alert}
          addTodo={addTodo}
          changeInput={changeInput}
          text={text}
          clearAll={clearAll}
          showClearAll={todos.length > 1}
          editMode={editMode}
        />
        {todos.length > 1 && (
          <Filter
            viewAllTodos={viewAllTodos}
            filter={filter}
            changeFilter={changeFilter}
          />
        )}
        <TodoList
          todos={filterTodos()}
          toogleStatus={toogleStatus}
          deleteTodo={deleteTodo}
          setEditMode={changeEditMode}
        />
      </div>
    </div>
  )
}

export default App
