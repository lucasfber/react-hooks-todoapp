import React from "react"

const TodoItem = ({ todo, toogleStatus, deleteTodo, setEditMode }) => {
  return (
    <div className="todo-item">
      <div className="todo--title">
        <h3 className={todo.isActive ? `` : `done`}>{todo.title}</h3>
      </div>
      <div className="actions">
        <button
          className={
            todo.isActive
              ? `btn btn--circle btn-active`
              : `btn btn--circle btn-done`
          }
          onClick={() => toogleStatus(todo.id)}
          title="Toggle Status"
        >
          {todo.isActive ? (
            <i className="fas fa-check-circle active"></i>
          ) : (
            <i className="fas fa-exclamation done"></i>
          )}
        </button>
        <button
          className="btn btn-edit btn--circle"
          title="Edit Todo"
          onClick={() => setEditMode(todo.id)}
        >
          <i className="far fa-edit"></i>
        </button>
        <button
          className="btn btn-delete btn--circle"
          title="Delete Todo"
          onClick={() => deleteTodo(todo.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  )
}

export default TodoItem
