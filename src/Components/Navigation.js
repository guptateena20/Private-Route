import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Styles/navigation.css"
import { useAuth } from './auth'

const Navigation = () => {
    const auth = useAuth()
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="home">Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="contact">Contacts</NavLink>
                        </li>

                        <li>
                            <NavLink to="service">Services</NavLink>
                        </li>

                        {
                            !auth.user &&
                            (<li>
                                <NavLink to="login">Login</NavLink>
                            </li>)
                        }
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navigation