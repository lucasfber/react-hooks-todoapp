import React from "react"
import TodoItem from "./TodoItem"

const TodoList = ({ todos, toogleStatus, deleteTodo, setEditMode }) => {
  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            toogleStatus={toogleStatus}
            deleteTodo={deleteTodo}
            setEditMode={setEditMode}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
