import React, { useContext } from "react"

import TodoContext from "../context/todo/TodoContext"

const Filter = () => {
  const context = useContext(TodoContext)
  const { setFilter, filter } = context

  return (
    <div className="filter">
      <span
        className={`${filter === null ? "selected" : ""}`}
        onClick={() => setFilter(null)}
      >
        View all /{" "}
      </span>
      <span
        className={`${filter ? "selected" : ""}`}
        onClick={() => setFilter(true)}
      >
        Active /{" "}
      </span>
      <span
        className={`${filter === false ? "selected" : ""}`}
        onClick={() => setFilter(false)}
      >
        Completed
      </span>
    </div>
  )
}

export default Filter
