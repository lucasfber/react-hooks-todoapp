import React from "react"

const TodoForm = ({ addTodo, changeInput, text, alert }) => {
  return (
    <form onSubmit={addTodo}>
      {alert && <p>{alert}</p>}
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
