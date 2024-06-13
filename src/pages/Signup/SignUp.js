import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { API_URL } from '../../Config/API_URL';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Signup.css'
function SignUp() {

  const [formData, setFormData] = useState({
    email: '',
    userName:'',
    password: ''
    });
  const navigate= useNavigate()
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit=async(e)=>{
      e.preventDefault()
        if(Boolean(formData.userName) && Boolean(formData.email) && Boolean(formData.password)){
          const signupData={
            username:formData.userName,
            email:formData.email,
            password:formData.password
          }
          try {
            const res=await axios.post(`${API_URL}/signup`,
              signupData
            )
            if(res.data.statusCode=='400'){
           toast.error(res.data.message)
            }
            else {
              navigate('/')
            }
          } catch (error) {
            console.log(error)
          }
        }
        else {
          alert('fill all the fields')
        }
    }
  return (
    <div className='container'>
        <div>Sign up</div>
        <form onSubmit={handleSubmit}>
        <div className='align'>

            <label htmlFor="" style={{    paddingRight: "100px"}}>UserName</label><input type="text" name='userName' value={formData.userName} onChange={handleChange}/>
            </div>
            <br/>

            <div className='align'>

            <label htmlFor="" style={{    paddingRight: "130px"}}>Email</label><input type="text" name='email' value={formData.email} onChange={handleChange}/>
            </div>
            <br/>

            <div className='align'>

            <label htmlFor="" style={{paddingRight: "110px"}}>Password</label><input type="text" name='password' value={formData.password} onChange={handleChange}/>
            </div>
            <br/>

            <div className="submitButton">
                <button className="loginBtn" type='submit'>Sign UP</button>
            </div>
        </form>
        <Link to={'/'} >Already have an account?</Link>
    </div>
  )
}

export default SignUp