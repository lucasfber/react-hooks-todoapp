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
    <div>
      {showClearAll && <button onClick={clearAll}>Clear All Todos</button>}
      <form onSubmit={addTodo}>
        {alert && <p>{alert}</p>}
        <input
          type="text"
          placeholder="TodoForm"
          value={text}
          onChange={changeInput}
        />
        {editMode ? (
          <button type="submit">Edit</button>
        ) : (
          <button type="submit">Add</button>
        )}
      </form>
    </div>
  )
}

export default TodoForm
