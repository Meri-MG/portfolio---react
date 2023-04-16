
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Inscription() {
    const history  = useNavigate()
    const [email , setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage , setSuccessMessage] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
          email: email,
          password: password
        };
        
    
        let url = "api/Account/register";
        axios.post(url,data)
        .then(res => {
          if(res.data.savedUser ){
            setSuccessMessage("votre compte a été crée")
          }
          console.log(res);
        
    
        
        })
        .catch((err) => {
          setErrorMessage(err.response.data.message) 
    
        });
      
      };

  return (
    <div className='container '>
        
        <form onSubmit={handleSubmit}  >
        <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} name="email"  />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  name="password"  />
        <input type="submit" className='btn btn-danger' value="inscription" />
        </form>
        <p style={{color: errorMessage ? "red" : "green"}}>{errorMessage ? errorMessage : null}</p>
        <p style={{color:  "green"}}>{successMessage ? successMessage : null}</p>
    </div>
  )
}
