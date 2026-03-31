import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../views/Home"
import { NotFound } from "../views/NotFound"
import { Login } from "../views/Login"
import { RouteProtected } from "../components/RouteProtected"
import { Register } from "../views/Register"
import { About } from "../components/acerca/About"

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* RUTA PÚBLICA: Accesible para todo el mundo */}
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<RouteProtected><Home /></RouteProtected>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }