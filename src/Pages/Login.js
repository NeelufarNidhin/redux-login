import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { userLogin } from '../actions/authSlice';

function Login() {

 // const [userId,setUserId] = useState("");
  const { auth } = useSelector((state) => state.auth);
    const [email,setEmail] = useState("");
    const [password , setPassword] = useState("");
    const dispatch = useDispatch();
    const [redirect, setRedirect] = useState(false);
    

    const handlesubmit =(e) =>{
        e.preventDefault();
       
    axios.post('http://localhost:8000/api/login',
    JSON.stringify({email,password}),
    {headers:  { "Content-Type": "application/json" },
   withCredentials:true }).then((response) =>{

    localStorage.setItem("key", JSON.stringify(response.data));
				dispatch(  userLogin(response.data));
    
   }).catch((err)=>{
      console.log(err.message)
   })
  setRedirect(true);
  
    }
    
    if (redirect) {
      
        return  <Navigate to="/"/>
      }
    
      
  return (
    <div>
<main className="form-signin w-100 m-auto">
<form onSubmit={handlesubmit}>
   
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    <div className="form-floating">
      <input type="email" required onChange={(e) => {
        setEmail(e.target.value)
      }} className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" required onChange={(e) => {
        setPassword(e.target.value)
      }} className="form-control" id="floatingPassword" placeholder="Password"/>
      <label htmlFor="floatingPassword">Password</label>
    </div>

    
    <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
    
  </form>
  </main>  
    </div>
  )
}

export default Login
