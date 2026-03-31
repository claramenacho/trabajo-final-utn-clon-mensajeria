import { useState, useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { addUser } = useContext(ChatContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Estructura del nuevo usuario con campos necesarios para el resto de la app
    const newUser = {
      ...formData,
      id: crypto.randomUUID(), 
      image: "https://unavatar.io/duckduckgo/utn.edu.ar", 
      address: { country: "Argentina" },
      messages: [],
    };

    
    const response = addUser(newUser);
    
    if (response.success) {
      navigate("/login");
    } else {
      
      alert(response.message); 
    }
  };

  return (
    <section className="cont-login">

        <form onSubmit={handleSubmit}>
            <h2 className="title-login">Crear cuenta</h2>
            
            <input
            type="text"
            name="firstName"
            placeholder="Nombre"
            value={formData.firstName}
            onChange={handleChange}
            required
            />
            
            <input
            type="text"
            name="lastName"
            placeholder="Apellido"
            value={formData.lastName}
            onChange={handleChange}
            required
            />

            <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            />

            <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
            />

            <button type="submit">Registrarse</button>
            
            <p style={{ textAlign: 'center', fontSize: '14px', marginTop: '10px' }}>
            ¿Ya tienes cuenta? <Link to="/login" style={{ color: 'var(--primary)' }}>Inicia sesión</Link>
            </p>
        </form>
    </section>
  );
};

export { Register };