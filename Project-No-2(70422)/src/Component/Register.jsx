import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";
import { useForm } from 'react-hook-form';
import {Link} from "react-router-dom";

function Register() {
   const { register, handleSubmit, formState: { errors }  } = useForm()
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  


  function handleFormSubmit(e) {
    
    if (!name || !email || !password || !phone || !profession) {
      console.log(e,JSON.stringify(e.email));
      localStorage.setItem("Email",JSON.stringify(e.email));
      localStorage.setItem(
        "Password",
        JSON.stringify(e.password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

 
  

  return (
    <>
 
        <div>
          {" "}
          {login ? (
            <form onSubmit={handleSubmit(handleFormSubmit)} className='column' id='secondary' >
              <h3>Register</h3>

              <div>
                <label>Fastname</label>
                <br/>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  name="Name"
                
               {...register('Name', { required: { value: true, message: 'Enter a name'},minLength: { value: 2, message: 'Length should be greater than 2'},maxLength: { value: 15, message: 'Length should be lesser than 15'} })}
                    onChange={(event) => setName(event.target.value)} />
                {errors.Name && (<span>{errors.Name.message}</span>)}
              </div>
              
                 <div>
                <label>Lastname</label>
                <br/>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  name="Lastname"
                
               {...register('Lastname', { required: { value: true, message: 'Enter a name'},minLength: { value: 2, message: 'Length should be greater than 2'},maxLength: { value: 15, message: 'Length should be lesser than 15'} })}
                    onChange={(event) => setLastname(event.target.value)} />
                {errors.Lastname && (<span>{errors.Lastname.message}</span>)}
              </div>

              <div>
                <label>Email</label>
                <br/>
                <input
                  type="email"
                  
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                {...register('email', { required: { value: true, message: 'Email is required'}, 
                pattern: { value: /^[\w-\.]+@([\w]+\.)+[\w]{2,4}$/, message: 'Enter a valid email' } })}/>
                {errors.email && (<span>{errors.email.message}</span>)}
              </div>

              <div>
                <label>Password</label>
                <br/>
                <input
                  type="password" 
                  
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                  
              {...register('password', { required: { value: true, message: 'Email is required'}, 
                pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, message: 'Enter a valid password' } })} />
                {errors.password && (<span>{errors.password.message}</span>)}
              </div>

              <div>
                <label>Phone No.</label>
                <br/>
                <input
                  type="Phone"
                  
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
  {...register('phone', { required: { value: true, message: 'Enter a pnone No'},minLength: { value: 2, message: 'Length should be greater than 2'},maxLength: { value: 10, message: 'Length should be lesser than 15'} })}
                  />
                 {errors.phone && (<span>{errors.phone.message}</span>)}
              </div>

              <div>
                <label>Choose your Profession</label>
                <select
                 
                  onChange={(event) => setProfession(event.target.value)}
                >
                  <option>Select</option>
                  <option>Frontend</option>
                  <option>Full Stack</option>
                  <option>Mobile Building</option>
                  <option>App Development</option>
                </select>
              </div>
<br/>
              <button type="submit">
                Register
              </button>
               <button style={{margin: "3px"}} ><Link to='/'>Login</Link>
               </button>
              
          
              {flag && (
                <Alert color="primary" variant="danger">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
            </form>
          ) : (
            <Login />
          )}
          <div> </div>
        </div>
    
    </>
  );
}

export default Register;
