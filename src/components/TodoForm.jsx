import React from "react"

const TodoForm = ({
  addTodo,
  changeInput,
  text,
  alert,
  showClearAll,
  clearAll,
  editMode,
  placeholderText
}) => {
  return (
    <div className="todo-form">
      <form onSubmit={addTodo}>
        {alert && <p className="alert">{alert}</p>}
        <input
          type="text"
          className="todo-text"
          placeholder={placeholderText}
          value={text}
          onChange={changeInput}
        />
        {editMode ? (
          <button className="btn btn--primary btn--large" type="submit">
            Edit
          </button>
        ) : (
          <button className="btn btn--primary btn--large" type="submit">
            Add
          </button>
        )}
        {showClearAll && (
          <button className="btn btn-clear btn--large" onClick={clearAll}>
            Clear All Todos
          </button>
        )}
      </form>
    </div>
  )
}

export default TodoForm
