import React from "react"
import "./App.css"

import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import Filter from "./components/Filter"

class App extends React.Component {
  state = {
    todos: [
      { id: 1, title: "Do something", isActive: true },
      { id: 2, title: "Stay at home", isActive: false },
      { id: 3, title: "To practice React", isActive: true }
    ],
    text: ""
  }

  addTodo = e => {
    e.preventDefault()
    const { text, todos } = this.state
    const todo = { id: todos.length + 1, title: text, isActive: true }

    console.log("todo", todo)
    this.setState({
      todos: todos.concat([todo])
    })
  }

  changeInput = e => {
    this.setState({
      ...this.state,
      text: e.target.value
    })
  }

  toogleStatus = id => {
    const { todos } = this.state

    this.setState({
      todos: todos.map(todo =>
        todo.id === id ? { ...todo, isActive: !todo.isActive } : todo
      )
    })
  }

  render() {
    const { todos, text } = this.state

    console.log("todo = ", text)
    return (
      <div className="App">
        <div className="container">
          <h1>Todo App</h1>
          <TodoForm
            addTodo={this.addTodo}
            changeInput={this.changeInput}
            text={text}
          />
          <Filter />
          <TodoList todos={todos} toogleStatus={this.toogleStatus} />
        </div>
      </div>
    )
  }
}

export default App
