import React from 'react'
import {useState } from 'react';
import { useEffect } from 'react';
import Dash from './components/Dash';
import Udash from './components/Udash';
import './login.css';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
    const [isUserLoggedIn,setIsUserLoggedIn]=useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [loginname,setlogin]=useState("");
    const [roll,setRoll]=useState("");
    const navigate=useNavigate();
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
       
    
      const user =users.find((user) =>{if(user.username === username && user.password === password) return user})
      setlogin(user.username);
      setRoll(user.roll);
      
      if (user.role==='admin') {
        setIsAdminLoggedIn(true);
      }
       else if(user.role==='user')
      {
        setIsUserLoggedIn(true);
      } 
      else {
         document.getElementById('error').innerHTML="Username or Passowrd is incorrect";
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
         <div className='Signcontainer' id="logsign">
            <p id='error' style={{color:'red'}}></p>
         <div id='inner'>
        <div className='container' id='loginform'>
        <form onSubmit={(e) => 
          {
              e.preventDefault(); 
              handleLogin()
          }}>
          <h1 style={{padding:'15px',textAlign:'center',fontSize:'30px'}}>Login</h1>
          <br></br>
          
            <div className='uname'>
              <label className="label">Username</label>
              <input className="input" type="text"  name="fname"  value={username} onChange={handelUsername}/>
                     
            </div>
            <br/> 
            <div className="pword">
              <label className="label">Password </label>
              <input className="input" type="password"  name="password"  value={password} onChange={handelPassword}/>
  
            </div>
            <br/>
          <input type='submit' value='submit' className="submit" id='sub'/>
          
        </form>
        <br/>
      
      </div>
    </div>
         </div>
        </>
      );
    }
  }

export default Login;
