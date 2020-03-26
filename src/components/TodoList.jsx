import React from "react"
import TodoItem from "./TodoItem"

const TodoList = ({ todos, toogleStatus, deleteTodo, setEditMode }) => {
  return (
    <div>
      <h3>TodoList</h3>
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
