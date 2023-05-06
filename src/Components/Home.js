
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'
import "../Styles/pages.css"

const Home = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    const handleLogout = () => {
        auth.logout()
        navigate("/login", { replace: true })
    }
    return (
        <>
            <div className='homepage_div'>
                <h2 className='username'>Welcome! {auth.user.charAt(0).toUpperCase() + auth.user.slice(1)}</h2>
                <button className="logout_btn" onClick={handleLogout}>Logout</button>
            </div>
        </>
    )
}

export default Home