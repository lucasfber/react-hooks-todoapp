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
    alert: null,
    editMode: false,
    todo: {}
  }

  addTodo = e => {
    e.preventDefault()

    const { text, todos, editMode } = this.state
    if (text.length > 0) {
      if (editMode) {
        const { todos, todo, text } = this.state
        const id = todo.id
        this.setState({
          todos: todos.map(todo =>
            todo.id === id ? { ...todo, title: text } : todo
          ),
          editMode: false,
          text: "",
          todo: {},
          alert: null
        })
      } else {
        const todo = { id: todos.length + 1, title: text, isActive: true }

        this.setState({
          todos: todos.concat(todo),
          text: ""
        })
      }
    } else {
      this.setState({
        alert: "Please enter a title/desciption to your Todo"
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

  changeFilter = filter => {
    this.setState({
      filter
    })
  }

  clearAll = () => {
    this.setState({
      todos: [],
      filter: null
    })
  }

  deleteTodo = id => {
    const { todos } = this.state

    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  setEditMode = id => {
    const { todos } = this.state
    const todo = todos.filter(todo => todo.id === id)[0]

    this.setState({
      todo,
      text: todo.title,
      editMode: true
    })
  }

  filterTodos = () => {
    const { todos, filter } = this.state
    return filter === null
      ? todos
      : todos.filter(todo => todo.isActive === filter)
  }

  viewAllTodos = () => {
    this.setState({
      filter: null
    })
  }

  render() {
    const { todos, text, filter, alert, editMode } = this.state
    console.log(this.state)
    return (
      <div className="App">
        <div className="container">
          <h1>Todo App</h1>
          <TodoForm
            alert={alert}
            addTodo={this.addTodo}
            changeInput={this.changeInput}
            text={text}
            clearAll={this.clearAll}
            showClearAll={todos.length > 1}
            editMode={editMode}
          />
          {todos.length > 1 && (
            <Filter
              viewAllTodos={this.viewAllTodos}
              filter={filter}
              changeFilter={this.changeFilter}
            />
          )}
          <TodoList
            todos={this.filterTodos()}
            toogleStatus={this.toogleStatus}
            deleteTodo={this.deleteTodo}
            setEditMode={this.setEditMode}
          />
        </div>
      </div>
    )
  }
}

export default App
