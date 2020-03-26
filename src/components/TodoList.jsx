import React from "react"
import TodoItem from "./TodoItem"

const TodoList = ({ todos, toogleStatus, deleteTodo }) => {
  return (
    <div>
      <h3>TodoList</h3>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} toogleStatus={toogleStatus} deleteTodo={deleteTodo}/>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
