import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

function Register() {
    const [firstName, setFirstName ]= useState("")
    const [lastName, setLastName ]= useState("")
    const [email,setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
  
   

    const handlesubmit =(e) =>{
        e.preventDefault();
       
      //  const response = 
         fetch('http://localhost:8000/api/register',{
            method : "POST",
            headers:{'Content-Type' :'application/json'},
            credentials:'include',
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password
            })
        })
      
        setRedirect(true);

    }
    if (redirect) {
        return <Navigate to="/login"/>;
    }


  return (
    <div>
         <form onSubmit={handlesubmit}>
    
    <h1 className="h3 mb-3 fw-normal">New User? Register</h1>
    <div className="form-floating">
      <input type="firstName" required onChange={(e) => {
        setFirstName(e.target.value)
      }} className="form-control" id="floatingInput1" placeholder="Your name"/>
      <label htmlFor="floatingInput1">First Name</label>
      
    </div>
    <div className="form-floating">
      <input type="lastName" required onChange={(e) => {
        setLastName(e.target.value)
      }} className="form-control" id="floatingInput2" placeholder="Your name"/>
      <label htmlFor="floatingInput2">Last Name</label>
    </div>
    <div className="form-floating">
      <input type="email" required onChange={(e) => {
        setEmail(e.target.value)
      }} className="form-control" id="floatingInput3" placeholder="name@example.com"/>
      <label htmlFor="floatingInput3">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" required onChange={(e) => {
        setPassword(e.target.value)
      }} className="form-control" id="floatingPassword" placeholder="Password"/>
      <label htmlFor="floatingPassword">Password</label>
    </div>

    
    <button className="btn btn-primary w-100 py-2" type="submit">Sign up</button>
  
  </form>
      
    </div>
  )
}

export default Register
