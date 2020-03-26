import React from "react"
import "./App.css"

import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import Filter from "./components/Filter"

class App extends React.Component {
  state = {
    todos: [],
    text: "",
    filter: null,
    alert: null
  }

  addTodo = e => {
    e.preventDefault()
    const { text, todos } = this.state
    if(text.length > 0) {
      const todo = { id: todos.length + 1, title: text, isActive: true }

      this.setState({
        todos: todos.concat(todo),
        text: ''
      })
    } else{
      this.setState({
        alert: 'Please enter a title/desciption to your Todo'
      })
    }
  }

  changeInput = e => {
    this.setState({
      ...this.state,
      text: e.target.value,
      alert: null
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

  changeFilter = (filter) => {
    this.setState({
      filter
    })
  }

  clearAll = () => {
    this.setState({
      todos: []
    })
  }

  deleteTodo = (id) => {
    const { todos } = this.state

    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  filterTodos = () => {
    const { todos, filter } = this.state
    return (filter === null) ? todos : todos.filter(todo => todo.isActive === filter)
  }

  viewAllTodos = () => {
    this.setState({
      filter: null
    })
  }

  render() {
    const { todos, text, filter, alert } = this.state
    return (
      <div className="App">
        <div className="container">
          <h1>Todo App</h1>
          <TodoForm
            alert={alert}
            addTodo={this.addTodo}
            changeInput={this.changeInput}
            text={text}
            showClearAll={todos.length > 1}
          />
          { todos.length > 1 && <Filter 
            viewAllTodos={this.viewAllTodos} 
            filter={filter} 
            changeFilter={this.changeFilter}
          />}
          <TodoList 
            todos={this.filterTodos()} 
            toogleStatus={this.toogleStatus} 
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    )
  }
}

export default App
