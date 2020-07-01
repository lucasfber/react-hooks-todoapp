import React from "react"

const About = () => {
  return (
    <section className="About">
      <div className="container">
        <h1 className="main-title">About (Todo App)</h1>
        <h3 className="description">
          This app was created only to put in practice my knowledge about React,
          such as: Hooks, Context API, React Router, and also put in practice
          some Web design concepts such as: Mobile-first approach, SASS.
        </h3>
        <h3 className="secondary-title">This app uses:</h3>
        <ul className="features">
          <li>
            <h4>
              React Hooks:<span>&#10004;</span>
            </h4>
            <ul className="inner-features">
              <li>useEffect</li>
              <li>useContext</li>
              <li>useReducer</li>
            </ul>
          </li>
          <li>
            <h4>
              Context API <span>&#10004;</span>
            </h4>
          </li>
          <li>
            <h4>
              React Router <span>&#10004;</span>
            </h4>
          </li>
          <li>
            <h4>
              SASS for styles (.scss) <span>&#10004;</span>
            </h4>
          </li>
          <li>
            <h4>
              Responsive Design (Mobile First Approach) <span>&#10004;</span>
            </h4>
          </li>
          <li>
            <h4>
              BEM methodology <span>&#10004;</span>
            </h4>
          </li>
          <h3 className="secondary-title">Upcoming improvements:</h3>
          <ul className="improvements">
            <li>
              <h4>
                Styled-Components{" "}
                <span className="icon-sand-timer">&#8987;</span>
              </h4>
            </li>
            <li>
              <h4>
                Store data in Firebase{" "}
                <span className="icon-sand-timer">&#8987;</span>
              </h4>
            </li>
            <li>
              <h4>
                Choose a styleguide to follow (AirBnb, Pagar.me){" "}
                <span className="icon-sand-timer">&#8987;</span>
              </h4>
            </li>
          </ul>
        </ul>
      </div>
    </section>
  )
}

export default About
