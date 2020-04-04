import React, { Fragment } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.scss"

import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

import About from "./pages/About"
import Navbar from "./components/Navbar"
import TodoState from "./context/todo/TodoState"

const App = () => {
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
                    <TodoList />
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
