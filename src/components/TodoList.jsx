import React, { useState } from "react"
import TodoItem from "./TodoItem"
import Modal from "./Modal"

const TodoList = ({
  todos,
  toogleStatus,
  deleteTodo,
  setEditMode,
  showModalDelete,
  setShowModalDelete
}) => {
  const [todoId, setTodoId] = useState(null)

  const getTodoIdToDelete = id => {
    setShowModalDelete(true)
    setTodoId(id)
  }

  return (
    <div className="todo-list">
      {showModalDelete && (
        <Modal
          title="Delete?"
          text="Do you want delete this todo?"
          onAccept={() => {
            setShowModalDelete(false)
            deleteTodo(todoId)
          }}
          onDeny={() => setShowModalDelete(false)}
        />
      )}
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            toogleStatus={toogleStatus}
            deleteTodo={getTodoIdToDelete}
            setEditMode={setEditMode}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
