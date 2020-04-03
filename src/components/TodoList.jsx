import React, { useState, Fragment, useContext } from "react"
import TodoItem from "./TodoItem"
import Modal from "./Modal"
import Filter from "./Filter"

import TodoContext from "../context/todo/TodoContext"

const TodoList = ({
  toogleStatus,
  deleteTodo,
  setEditMode,
  showModalDelete,
  setShowModalDelete
}) => {
  const [todoId, setTodoId] = useState(null)

  const context = useContext(TodoContext)
  const { todos, filter } = context

  const getTodoIdToDelete = id => {
    setShowModalDelete(true)
    setTodoId(id)
  }

  const filterTodos = () => {
    return filter === null
      ? todos
      : todos.filter(todo => todo.isActive === filter)
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
        {showModalDelete && (
          <Modal
            title="Delete?"
            text="Do you want delete this todo?"
            onAccept={() => {
              setShowModalDelete(false)
              deleteTodo(todoId)
            }}
            onDeny={() => setShowModalDelete(false)}
          />
        )}
        <ul>
          {filterTodos().map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              toogleStatus={toogleStatus}
              deleteTodo={getTodoIdToDelete}
              setEditMode={setEditMode}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  )
}

export default TodoList
