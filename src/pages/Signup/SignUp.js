import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { API_URL } from '../../Config/API_URL';
import axios from 'axios';

function SignUp() {


    const [userName,setUserName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
  const navigate= useNavigate()
    const handleSubmit=async(e)=>{
      e.preventDefault()
        if(Boolean(userName) && Boolean(email) && Boolean(password)){
          const signupData={
            username:userName,
            email:email,
            password:password
          }
          console.log(signupData)
          try {
            const res=await axios.post(`${API_URL}/api/v1/signup`,
              signupData
            )
            console.log(res.data.tokenData)
            if(res.data.statusCode=='400'){
              setError("user already exist")
            }
            else {
              setError('')
              navigate('/')
            }
          } catch (error) {
            console.log(error)
          }
          setUserName('')
setEmail('')
setPassword('')
        }
        else {
          alert('fill all the fields')
        }
    }
  return (
    <div>
        <div>Sign up</div>
        <form onSubmit={handleSubmit}>
            <div>

            <label htmlFor="">UserName</label><input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            </div>
            <div>

            <label htmlFor="">Email</label><input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>

            <label htmlFor="">Password</label><input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="submitButton">
                <button className="loginBtn" type='submit'>Sign UP</button>
            </div>
            {error ? <div className="errorMessage">{error}</div> : null}
        </form>
        <Link to={'/'} >Already have an account?, please Login.</Link>
    </div>
  )
}

export default SignUp