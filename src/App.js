import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.scss"

import About from "./pages/About"
import Navbar from "./components/Navbar"
import TodoState from "./context/todo/TodoState"
import Home from "./pages/Home"

const App = () => {
  return (
    <TodoState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    </TodoState>
  )
}

export default App
