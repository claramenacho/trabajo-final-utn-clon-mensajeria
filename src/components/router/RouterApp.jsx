import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../../pages/Home'
import { NotFound } from '../../pages/NotFound'
import { Login } from '../../pages/Login'
import { RouterProtected } from '../RouterProtected'

const RouterApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<RouterProtected><Home /></RouterProtected>}/>
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }
