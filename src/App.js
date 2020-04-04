import React, { useState, Fragment } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.scss"

import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

import About from "./pages/About"
import Navbar from "./components/Navbar"
import TodoState from "./context/todo/TodoState"

const App = () => {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState("")
  const [todo, setTodo] = useState({})
  const [showModalDelete, setShowModalDelete] = useState(false)

  const changeEditMode = (id) => {
    const todo = todos.filter((todo) => todo.id === id)[0]

    setTodo(todo)
    setText(todo.title)
    //setEditMode(true)
  }

  return (
    <TodoState>
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
                    <TodoForm />
                    <TodoList
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
    </TodoState>
  )
}

export default App
