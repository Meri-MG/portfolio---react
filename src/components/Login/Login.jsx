import React,{useState,useEffect} from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwt from "jsonwebtoken"; // Add this line

export default function Login() {

  const history = useNavigate()

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [errorMsg , setEerrorMsg] = useState([])
    const [successMsg , setSuccessMsg] = useState([])


    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        email: email,
        password: password,
      };
      
      let url = "http://localhost:3001/api/Account/login";
      await axios.post(url, data)
        .then((res) => {
          if (res.data.token) {
            const decodedToken = jwt.decode(res.data.token);
            const userId = decodedToken.userId; // Retrieve the user ID from the decoded token
            const email = decodedToken.email;
           
            
              
              localStorage.setItem("token", res.data.token);
             
              console.log(data);
              history(`/Dashboard/${userId}`);

          } else if (res.data === "Invalid password") {
            setEerrorMsg(res.data);
          } else if (res.data === "Invalid email") {
            setEerrorMsg(res.data);
          }
        })
        .catch((err) => {
          setEerrorMsg(err.response.data.message);
        });
    };


  return (
    <div className="container bootstrap snippets bootdey">
      <div className="row">
        <div className="col-sm-6 col-md-4 col-md-offset-4">
        
          <div className="account-wall">
            <img className="profile-img" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Profile" />
            <form onSubmit={handleSubmit} method='POST' className="form-signin">
              <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value) } placeholder="Email" required />
              
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" required />
               
              
              <input  className="btn btn-lg btn-primary btn-block" type="submit" value="Connexion" />
            
             
              <span className="clearfix">

              <p style={{color: "red"}}> {errorMsg} </p>

              </span>
            </form>
          </div>
       
        </div>
      </div>
    </div>
  );
}
