import React from 'react'
import {useState } from 'react';
import { useEffect } from 'react';
import Dash from './components/Dash';
import Udash from './components/Udash';
function Login() {
    const labelStyle = {
        display: "block",
        marginBottom: "5px",
        fontWeight: "bold",
      };
    
      const inputStyle = {
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        marginBottom: "15px",
        width: "100%",
      };
      const inputContainer = {
        width: "100%",
      };    
      const formStyle = {
        width: "80%",
        margin: "0 auto",
      };
    
      const formContainer = {
        backgroundColor: "white",
        padding: "50px",
      };
    
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
    const [isUserLoggedIn,setIsUserLoggedIn]=useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [loginname,setlogin]=useState("");
    const [roll,setRoll]=useState("");
    const handelUsername = (e) => {
      setUsername(e.target.value);
    }
  
    const handelPassword = (e) => {
      setPassword(e.target.value);
    }
  
    //fetching data from  database to the front end.
    const getUsers = async () => {
      try {
        const response = await fetch('http://localhost:8009', {
          method: 'GET'
        });
        const result = await response.json();
     
      setUsers(result);
     
    
       
      } 
      catch (error) {
        console.error(error);
      }
    }
  
    useEffect(() => {
      getUsers();
    },[]);
  
    const handleLogin = (e) => {
       
    
      const user =users.find((user) =>user.username === username && user.password === password)
      if(user===undefined)
      {
        document.getElementById('error').innerHTML="Username or Passowrd is incorrect";
     }
      else{
        setlogin(user.username);
      setRoll(user.roll);
      
     if (user.role==='admin') {
        setIsAdminLoggedIn(true);
      }
       else if(user.role==='user')
      {
        setIsUserLoggedIn(true);
      } 
      }
      
    };
  
   
  
  
    if (isAdminLoggedIn) {
      // If the user is logged in, render the authenticated content
      return (<Dash username={loginname} roll={roll}/>);
    }
    else if(isUserLoggedIn){
      
      return(<Udash username={loginname} roll={roll}/>)
    } 
    else {
      // If the user is not logged in, render the login form
      return (
        <>
<div className='row'>
    <div className='col-md-6 offset-md-3'>
       
    <div style={formContainer}>
      <form onSubmit={(e)=>{
        e.preventDefault();
                handleLogin();}} style={formStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
         Login with your Credentials
        </h2>
        < span id='error' style={{color:'red'}}></span>
          <div style={inputContainer}>
            <label style={labelStyle}>User Name:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handelUsername}
              style={inputStyle}
            />
          </div><br/>
          <div style={inputContainer}>
            <label style={labelStyle}>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handelPassword}
              style={inputStyle}
            />
          </div><br/>
       
        <center>
        <button type="submit" className="btn btn-success" style={{ padding: "10px 20px" }}>
  Submit
  </button>
        </center>
        </form>
        </div>
    </div>
</div>
        </>
      );
    }
  }

export default Login;
