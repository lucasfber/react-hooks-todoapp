import React from "react"

const TodoItem = ({ todo, toogleStatus, deleteTodo }) => {
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
       
          {todo.isActive ?  <i className="fas fa-exclamation"></i> : <i className="fas fa-check-circle"></i> }
        </button>
        <button onClick={() => deleteTodo(todo.id)}><i className="fas fa-trash-alt"></i></button>
      </div>
    </div>
  )
}

export default TodoItem
