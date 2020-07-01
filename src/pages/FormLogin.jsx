import React, { useState } from "react"

const FormLogin = () => {
  const [role, setRole] = useState("empresa")
  const URL = `htpp://localhost:5000/api/v1/auth/${role}`
  const [user, setUser] = useState({ login: "", password: "" })

  const fazerLogin = (e) => {
    e.preventDefault()
    console.log(`POST para ${URL}`)
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const changeRole = (e) => {
    setRole(e.target.value)
  }

  return (
    <section className="form-login">
      <div className="container">
        <form onSubmit={fazerLogin}>
          <div>
            <input
              type="text"
              name="login"
              value={user.login}
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={user.password}
              required
              onChange={handleChange}
            />
          </div>
          <select value={role} onChange={changeRole}>
            <option value="empresa">Empresa</option>
            <option value="motorista">Motorista</option>
            <option value="responsavel-setor">Responsável Setor</option>
            <option value="posto">Posto</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </section>
  )
}

export default FormLogin
