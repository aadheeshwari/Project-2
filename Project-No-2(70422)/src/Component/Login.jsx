import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "./Home";
import { useForm } from 'react-hook-form';
import {Link} from "react-router-dom";

function Login() {
   const { register, handleSubmit, formState: { errors }  } = useForm()
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
   
    let pass = localStorage
      .getItem("Password")
      .replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    <div>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3>LogIn</h3>
          <br/>
          <div>
            <label>Email</label>
          <br/>
            <input
              type="email"
            
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div>
            <label>Password</label>
          <br/>
            <input
              type="password"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <br/>
          <button type="submit" >
            Login
          </button>
          <button style={{margin: "50px"}} ><Link to="reg">For New Registeration</Link></button>
           <button style={{margin:'1rem'}}>
               Forgot password 
              </button>

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default Login;
