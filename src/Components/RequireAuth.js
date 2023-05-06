import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './auth'

const RequireAuth = ({ children }) => {
    console.log("children", children)
    const auth = useAuth()
    if (!auth.user) {
        return <Navigate to = "/login"/>
    }
    return children
}

export default RequireAuth 
