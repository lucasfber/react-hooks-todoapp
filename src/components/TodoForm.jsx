import React, { useContext } from "react"
import TodoContext from "../context/todo/TodoContext"

import Modal from "../components/Modal"

const TodoForm = ({
  addTodo,
  changeInput,
  text,
  alert,
  showClearAll,
  editMode,
  placeholderText
}) => {
  const context = useContext(TodoContext)
  const { isModalClearAllVisible, toggleModalClearAll } = context

  return (
    <div className="todo-form">
      {isModalClearAllVisible && (
        <Modal
          title="Cler All?"
          text="Do you want clear all todos?"
          onAccept={() => console.log("clearAll")}
          onDeny={() => toggleModalClearAll(false)}
        />
      )}
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
          <button
            type="button"
            className="btn btn-clear btn--large"
            onClick={() => toggleModalClearAll(true)}
          >
            Clear All Todos
          </button>
        )}
      </form>
    </div>
  )
}

export default TodoForm
