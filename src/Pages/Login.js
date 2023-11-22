import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

function Login() {
    
    const [email,setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const handlesubmit =(e) =>{
        e.preventDefault();
        const response =  fetch('http://localhost:8000/api/login',{
            method : "POST",
            headers:{'Content-Type' :'application/json'},
            body: JSON.stringify({
                email,
                password
            })
        })
      
        setRedirect(true);
       

    }
    if (redirect) {
      return <Navigate to="/"/>;
  }
  return (
    <div>
<main class="form-signin w-100 m-auto">
<form onSubmit={handlesubmit}>
   
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    <div className="form-floating">
      <input type="email" onChange={(e) => {
        setEmail(e.target.value)
      }} className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" onChange={(e) => {
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
