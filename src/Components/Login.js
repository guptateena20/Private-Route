
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'
import "../Styles/pages.css"


const Login = () => {
  const [user, setUser] = useState("")
  const auth = useAuth()
  console.log('auth', auth);
  const navigate = useNavigate()

  const handleLogin = () => {
    auth.login(user)
    
    navigate("/", { replace: true })
  }

  return (
    <>
      <div className='form_div'>
        <form>
          <label>
            <p>Username:</p>
            <input type="text" placeholder="Enter you name" onChange={(e) => setUser(e.target.value)} />
          </label>
          <br />
          <button className="login_btn" onClick={handleLogin}>Login</button>
        </form>
      </div>
    </>
  )
}

export default Login