import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Navigate } from 'react-router-dom'

const RouterProtected = ({ children }) => {
    const { user } = useContext(UserContext)

    if (!user) {
        return <Navigate to="/login" replace />
    }
    return (
        children
    )
}

export { RouterProtected }