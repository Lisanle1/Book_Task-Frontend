import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

  return (
    <div>
        <div>Login</div>
        <form>
            <div>

            <label htmlFor="">Email</label><input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>

            <label htmlFor="">Password</label><input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="submitButton">
                <button className="loginBtn">Login</button>
            </div>
        </form>
        <Link to={'/singup'} >Dont have an account?, please signup.</Link>
    </div>
  )
}

export default Login