import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AlertContext from '../../context/alerts/alertContext'
import AuthContext from '../../context/auth/authContext'

const Login = (props) => {

  // eslint-disable-next-line no-undef
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { message, authenticated, login } = authContext;


  //  In case of that the password  or user not exist
  useEffect(() => {

    if (authenticated) {
      props.history.push('/projects')
    }
    if (message) {
      showAlert(message.msg, message.category)
    }
    // eslint-disable-next-line
  }, [message, authenticated, props.history])

  // STATE TO LOGIN
  const [user, saveUser] = useState({
    email: '',
    password: ''
  })

  // extract form user
  const { email, password } = user

  const onChangeLogin = (e) => {
    saveUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  // when the user wants to login
  const onSubmit = e => {
    e.preventDefault()

    // Validate that there are no empty fields

    if (email.trim() === '' || password.trim() === '') {
      showAlert('Todos los campos son obligatorios', 'alert-error')
    }
    // Pass it to action

    login({ email, password });
  }
  return (
    <div className="form-usuario">
      {alert ? (<div className={`alert ${alert.category}`}> {alert.msg}</div>) : null}
      <div className="contenedor-form  sombra-dark">
        <h1>Iniciar Sesión</h1>

        <form
          onSubmit={onSubmit}
        >
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              value={email}
              onChange={onChangeLogin}
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
              onChange={onChangeLogin}
            />
          </div>

          <div className="campo-form">
            <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesión" />
          </div>

        </form>
        <Link to={'/new-account'} className="enlace-cuenta">
          Obtener cuenta
        </Link>
      </div>
    </div>
  )
}

export default Login
