import React, { useState } from 'react'
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";



const Register = () => {
  const [error,setError]=useState(false);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const handleRegister=(e)=>{
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    });
  }

  return (
    <div className='Register'>
      <form onSubmit={handleRegister}>
        <input type="email" placeholder="email" onChange={e=>setEmail(e.target.value)}/>
        <input type="password" placeholder='password'onChange={e=>setPassword(e.target.value)}/>
        <button type='submit'>Register</button>
        {error && <span>Wrong email or password!</span>}
      </form>
      <Routes>
          <Route path="/Register" element={<Register/>} />
      </Routes>
    </div>
  )
}

export default Register;
