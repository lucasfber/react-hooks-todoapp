import React from "react"
import TodoItem from "./TodoItem"

const TodoList = ({ todos, toogleStatus }) => {
  return (
    <div>
      <h3>TodoList</h3>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} toogleStatus={toogleStatus} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
