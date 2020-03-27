import React from "react"

const Filter = ({ viewAllTodos, changeFilter, filter }) => {
  return (
    <div className="filter">
      <span
        className={`${filter === null ? "selected" : ""}`}
        onClick={viewAllTodos}
      >
        View all /{" "}
      </span>
      <span
        className={`${filter ? "selected" : ""}`}
        onClick={() => changeFilter(true)}
      >
        Active /{" "}
      </span>
      <span
        className={`${filter === false ? "selected" : ""}`}
        onClick={() => changeFilter(false)}
      >
        Completed
      </span>
    </div>
  )
}

export default Filter
