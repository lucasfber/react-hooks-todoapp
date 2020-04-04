import React, { useState, Fragment, useContext } from "react"
import TodoItem from "./TodoItem"
import Modal from "./Modal"
import Filter from "./Filter"

import TodoContext from "../context/todo/TodoContext"

const TodoList = ({ setEditMode, setShowModalDelete }) => {
  const [todoId, setTodoId] = useState(null)

  const context = useContext(TodoContext)
  const {
    deleteTodo,
    isModalDeleteVisible,
    todos,
    toggleModalDelete,
    filter,
  } = context

  const filterTodos = () => {
    return filter === null
      ? todos
      : todos.filter((todo) => todo.isActive === filter)
  }

  return (
    <Fragment>
      {todos.length > 1 && (
        <Filter
          viewAllTodos={() => console.log("viewAllTodos")}
          filter={filter}
          changeFilter={() => console.log("changeFilter")}
        />
      )}
      <div className="todo-list">
        {isModalDeleteVisible && (
          <Modal
            title="Delete?"
            text="Do you want delete this todo?"
            onAccept={deleteTodo}
            onDeny={() => toggleModalDelete(false)}
          />
        )}
        <ul>
          {filterTodos().map((todo, index) => (
            <TodoItem key={index} todo={todo} setEditMode={setEditMode} />
          ))}
        </ul>
      </div>
    </Fragment>
  )
}

export default TodoList
