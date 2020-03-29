import React from "react"

const About = () => {
  return (
    <section className="About">
      <div className="container">
        <h1>About Todo App v.1</h1>
        <h2>
          TodoApp created to apply and fix concepts learned about React, Hooks,
          Context API, React Router
        </h2>
        <h3>The app uses:</h3>
        <ul>
          <li>React Hooks (useEffect, useState)</li>
          <li>React Router</li>
          <li>SASS (.scss)</li>
          <li>Responsive Design (Mobile First)</li>
          <li>BEM Methodolgy for styles</li>
          <li>
            I tried to follow the best practices based on some styleguides like:
            Airbnb (React, SCSS), Pagar.me(SCSS)
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
