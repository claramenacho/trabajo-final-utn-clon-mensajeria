import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext'; // Importo la caja
import { useNavigate } from 'react-router-dom' // Para viajar entre páginas
import { users } from '../services/mockApi'
import '../style/Login.css'

export const Login = () => {
    const { login } = useContext(UserContext)
    const navigate = useNavigate()
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // Buscamos si el usuario existe en tu mockApi
        const foundUser = users.find(u => u.email === email && u.password === password)

        if (foundUser) {
            login(foundUser) // Guardamos el usuario en el contexto
            navigate("/")    // ¡Nos vamos al chat!
        } else {
            alert("Usuario o contraseña incorrectos")
        }
    }
    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Bienvenido</h2>
                <p>Ingresa tus credenciales para continuar</p>

                {/* El FORM debe envolver a los inputs y al botón */}
                <form onSubmit={handleSubmit}>
                    
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="ejemplo@correo.com"
                            onChange={handleChangeEmail}
                            value={email} // Mantenemos el input controlado
                            required 
                        />
                    </div>

                    <div className="input-group">
                        <label>Contraseña</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            onChange={handleChangePassword}
                            required
                        />
                    </div>

                    <button type="submit" className="login-button">
                        INGRESAR
                    </button>
                    
                </form>

                <div className="login-footer">
                    ¿No tienes cuenta? Regístrate
                </div>
            </div>
        </div>
    )
}