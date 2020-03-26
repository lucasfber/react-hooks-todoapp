import React from "react"

const TodoForm = ({ addTodo, changeInput, text }) => {
  return (
    <form onSubmit={addTodo}>
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
