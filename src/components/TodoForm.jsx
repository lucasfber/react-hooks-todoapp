import React, { useContext, useEffect } from "react"
import TodoContext from "../context/todo/TodoContext"

import Modal from "../components/Modal"

const TodoForm = () => {
  const context = useContext(TodoContext)
  const {
    addTodo,
    clearAll,
    isAlertActive,
    isEditModeActive,
    isModalClearAllVisible,
    setInputText,
    setPlaceholder,
    placeholder,
    text,
    todos,
    toggleModalClearAll,
  } = context

  useEffect(() => {
    window.innerWidth > 1279
      ? setPlaceholder("Type your 'TODO' and press 'Enter'")
      : setPlaceholder("What needs to be done?")
    /* eslint-disable-next-line */
  }, [])

  const handleInputChange = (e) => {
    setInputText(e.target.value)
  }

  return (
    <div className="todo-form">
      {isModalClearAllVisible && (
        <Modal
          title="Cler All?"
          text="Do you want clear all todos?"
          onAccept={clearAll}
          onDeny={() => toggleModalClearAll(false)}
        />
      )}
      <form onSubmit={addTodo}>
        {isAlertActive && (
          <p className="alert">
            Please enter a title/description to your Todo!
          </p>
        )}
        <input
          type="text"
          className="todo-text"
          placeholder={placeholder}
          value={text}
          onChange={handleInputChange}
        />
        {isEditModeActive ? (
          <button className="btn btn--primary btn--large" type="submit">
            Edit
          </button>
        ) : (
          <button className="btn btn--primary btn--large" type="submit">
            Add
          </button>
        )}
        {todos.length > 1 && (
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
