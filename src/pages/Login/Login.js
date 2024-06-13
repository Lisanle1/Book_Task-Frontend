import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { API_URL } from '../../Config/API_URL';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Login.css'
function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
    });
  const navigate=useNavigate();
    const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit= async(e)=>{
      e.preventDefault();
      if(Boolean(formData.email) && Boolean(formData.password)){
       const response= await axios.post(`${API_URL}/login`,{
          email:formData.email,
          password:formData.password
        })
        if(response.data.statusCode==200){
          localStorage.setItem('token',response.data.tokenData)
          window.location.href='/home'
        }
        else{
          toast.error(response.data.message);

        }
      }
      else{
        toast.error("Please fill all the required fields");

      }
    }
  return (
    <div className='container'>
        <div>Login</div>
        <form onSubmit={handleSubmit}>
            <div className='align'>

            <label style={{    paddingRight: "130px"}} htmlFor="">Email</label><input style={{padding:"4px"}} type="text" name='email' value={formData.email} onChange={handleChange}/>
            </div>
            <br/>
            <div className='align'>

            <label style={{paddingRight: "110px"}}  htmlFor="">Password</label><input type="text" style={{padding:"4px"}}  name='password' value={formData.password} onChange={handleChange}/>
            </div>
            <br/>

            <div className="submitButton">
                <button className="loginBtn">Login</button>
            </div>
        </form>
        <Link to={'/signup'} >Dont have an account?</Link>

    </div>
  )
}

export default Login