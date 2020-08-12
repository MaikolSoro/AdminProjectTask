/* eslint-disable no-useless-return */
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import AlertContext from '../../context/alerts/alertContext'

const NewAccount = () => {

  // eslint-disable-next-line no-irregular-whitespace
  // Extract values ​​from context

  const alertContext = useContext(AlertContext);

  const { alert, showAlert } = alertContext;

  // STATE TO LOGIN
  const [user, saveUser] = useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  })

  // extract form user
  const { name, email, password, confirm } = user

  const onChangeRegister = (e) => {
    saveUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  // when the user wants to login
  const onSubmit = e => {
    e.preventDefault()

    // Validate that there are no empty fields
    if (name.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      confirm.trim() === '') {
      showAlert('Todos los campos son obligatorios', 'alert-error')
      return;
    }

    // minimum password of 6 characters
    if (password.length < 6) {
      showAlert('El password debe ser de al menos 6 caracteres', 'alert-error')
      return;
    }
    // Check if the two passwords are the same
    if (password !== confirm) {
      showAlert('Los passwords no son iguales', 'alert-error')
      return;
    }
    // Pass it to action
  }

  return (
    <div className="form-usuario">
      {alert ? (<div className={`alert ${alert.category}`}> {alert.msg}</div>) : null}
      <div className="contenedor-form  sombra-dark">
        <h1>Obtener una cuenta</h1>

        <form
          onSubmit={onSubmit}
        >
          <div className="campo-form">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu Nombre"
              value={name}
              onChange={onChangeRegister}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              value={email}
              onChange={onChangeRegister}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              value={password}
              onChange={onChangeRegister}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirm">Confirmar password</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              placeholder="Repite tu password"
              value={confirm}
              onChange={onChangeRegister}
            />
          </div>

          <div className="campo-form">
            <input type="submit" className="btn btn-primario btn-block" value="Registrame" />
          </div>

        </form>
        <Link to={'/'} className="enlace-cuenta">
          Volver a Iniciar Sesión
        </Link>
      </div>
    </div>
  )
}

export default NewAccount
