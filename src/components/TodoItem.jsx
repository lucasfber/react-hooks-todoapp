import React from "react"

const TodoItem = ({ todo, toogleStatus }) => {
  return (
    <div className="todo-item">
      <h2>{todo.title}</h2>
      {todo.isActive ? (
        <p className="active">Active</p>
      ) : (
        <p className="done">Completed</p>
      )}
      <div className="actions">
        <button onClick={() => toogleStatus(todo.id)}>
          {todo.isActive ? "Done" : "Redo"}
        </button>
        <button>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem
