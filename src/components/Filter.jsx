import React from "react"

const Filter = ({ viewAllTodos, changeFilter}) => {
  return <div>
   <span onClick={viewAllTodos}>View all / </span>
   <span onClick={() => changeFilter(true)}>Active / </span>
   <span onClick={() => changeFilter(false)}>Completed</span>
  </div>
}

export default Filter
