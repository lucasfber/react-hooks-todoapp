import React, { Fragment } from "react"
import TodoForm from "../components/TodoForm"
import TodoList from "../components/TodoList"

const Home = () => {
  return (
    <Fragment>
      <TodoForm />
      <TodoList />
    </Fragment>
  )
}

export default Home
