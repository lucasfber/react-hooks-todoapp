import React, { useState, useEffect, Fragment } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.scss"

import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import Filter from "./components/Filter"

import About from "./pages/About"
import Navbar from "./components/Navbar"
import Modal from "./components/Modal"

const App = () => {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState("")
  const [filter, setFilter] = useState(null)
  const [alert, setAlert] = useState(null)
  const [editMode, setEditMode] = useState(false)
  const [todo, setTodo] = useState({})
  const [placeholderText, setPlaceholderText] = useState("")
  const [showModalDelete, setShowModalDelete] = useState(false)
  const [showModalClearAll, setShowModalClearAll] = useState(false)

  useEffect(() => {
    getInnerWidth() > 1279
      ? setPlaceholderText("Type your 'TODO' and press 'Enter'")
      : setPlaceholderText("What needs to be done?")
  }, [])

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

  const getInnerWidth = () => {
    return window.innerWidth
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
    setShowModalClearAll(false)
    setTodos([])
    setFilter(null)
  }

  const deleteTodo = id => {
    console.log("to chamando?", id)
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
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Fragment>
                  {showModalClearAll && (
                    <Modal
                      title="Cler All?"
                      text="Do you want clear all todos?"
                      onAccept={clearAll}
                      onDeny={() => setShowModalClearAll(false)}
                    />
                  )}
                  <TodoForm
                    alert={alert}
                    addTodo={addTodo}
                    changeInput={changeInput}
                    text={text}
                    showClearAll={todos.length > 1}
                    editMode={editMode}
                    placeholderText={placeholderText}
                    setShowModalClearAll={setShowModalClearAll}
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
                    showModalDelete={showModalDelete}
                    setShowModalDelete={setShowModalDelete}
                  />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
