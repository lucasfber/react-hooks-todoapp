import React from "react"

const TodoForm = ({ addTodo, changeInput, text, alert, showClearAll, clearAll }) => {
  return (
    <form onSubmit={addTodo}>
      {alert && <p>{alert}</p>}
      {showClearAll && <button onClick={clearAll}>Clear All Todos</button>}
      <input
        type="text"
        placeholder="TodoForm"
        value={text}
        onChange={changeInput}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default TodoForm
