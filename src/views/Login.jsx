import { useState, useContext } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate, Link } from "react-router-dom" // Se importa Link

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" })
  const [error, setError] = useState(false)
  
  const { login } = useContext(ChatContext)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isLogged = login(formData)

    if (isLogged) {
      navigate("/")
    } else {
      setError(true)
    }
  }

  return (
    <section className="cont-login">
      <form onSubmit={handleSubmit}>
        <h2 className="title-login">Bienvenido</h2>
        
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          onChange={handleChange}
          required
        />
        
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={handleChange}
          required
        />

        <button type="submit">Ingresar</button>

        {/* Mensaje de Error */}
        {error && <p className="error-text">Credenciales incorrectas</p>}

        {/* LINK DE REGISTRO */}
        <div className="form-footer">
          <p>¿No tienes cuenta?</p>
          <Link to="/register">Regístrate aquí</Link>
        </div>
        <div className="login-footer">
          <p>¿Querés saber más sobre este proyecto?</p>
          <Link to="/about" className="link-about">Ver detalles del desarrollo</Link>
        </div>
      </form>
    </section>
  )
}

export { Login }