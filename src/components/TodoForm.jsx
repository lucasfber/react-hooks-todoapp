import React from "react"

const TodoForm = ({
  addTodo,
  changeInput,
  text,
  alert,
  showClearAll,
  clearAll,
  editMode
}) => {
  return (
    <div className="todo-form">
      <form onSubmit={addTodo}>
        {alert && <p className="alert">{alert}</p>}
        <input
          type="text"
          placeholder="What needs to be done?"
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
