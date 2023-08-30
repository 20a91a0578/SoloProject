import React from 'react'
import {useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import './index.css';
function Login() {
const navig=useNavigate();

    const labelStyle = {
        display: "block",
        marginBottom: "5px",
        fontWeight: "bold",
        color:"white",
        opacity:"1"
      };
    
      const inputStyle = {
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        marginBottom: "15px",
        width: "100%",
        backgroundColor:"white"
      };
      const inputContainer = {
        width: "100%",
      };    
      const formStyle = {
        width: "80%",
        margin: "0 auto",
      };
    
      const formContainer = {
        backgroundColor: "#8a6e86",
        padding: "50px",
        opacity:"0.5",
    borderRadius:" 10px",
    boxShadow:"5px 5px 5px"      
      };
    
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
    const [isUserLoggedIn,setIsUserLoggedIn]=useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [loginname,setlogin]=useState("");
    const [roll,setRoll]=useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [formData, setFormData] = useState({
    email:'' 
    });
  
    const handleChange = (event) => {
      setFormData({ [event.target.name]: event.target.value });
    };
  
    const handleSubmit = async() => {
     document.getElementById("error1").innerHTML="if you don't find your mail in the inbox.Please check it in junk/spam mails." ;
     setTimeout(handleClose,4000);
  const respon= await fetch('http://localhost:8006/sendpassword',{
    method:'POST',
    body:JSON.stringify(formData),
    headers:{
      "Content-Type":"application/json"
    }
  });

  console.log(respon);
  
    };
    const handelUsername = (e) => {
      setUsername(e.target.value);
      // console.log(username)
    }
  
    const handelPassword = (e) => {
      setPassword(e.target.value);
      // console.log(roll)
    }
  
    //fetching data from  database to the front end.
    const getUsers = async () => {
      try {
        const response = await fetch('http://localhost:8006', {
          method: 'GET'
        });
        const result = await response.json();
     
      setUsers(result);
      console.log(users);
     
    
       
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
      localStorage.setItem('username',user.username)
        setIsAdminLoggedIn(true);
      }
       else if(user.role==='user')
      {
        localStorage.setItem('username',user.username)
        setIsUserLoggedIn(true);
      } 
      }
      
    };
  
   
  
  
    if (isAdminLoggedIn) {
      // If the user is logged in, render the authenticated content
     
     navig('/dashboard');
    }
    else if(isUserLoggedIn){
      
      navig('/udashboard');
    } 
    else {
      // If the user is not logged in, render the login form
      return (
      
<div className='row login' style={{height:'100vh'}} >
    <div className='col-md-6 offset-md-3' style={{marginTop:'2%',marginBottom:'2'}}>
       
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
            <input type="text"name="username" value={username}
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
          <div className='row' style={{marginTop:'1%'}}>
      <div>
       
        <Button style={{color:'blue',backgroundColor:'white',border:'0px solid white'}} onClick={handleShow}>Forgot Password ?</Button>
     <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Enter you mail to change password </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                   
        <form style={{ maxWidth: '500px', width: '100%' }} onSubmit={handleSubmit}>
        <p id='error1' style={{color:'red'}}></p>
				<label htmlFor="name" style={{  fontSize: '18px', fontWeight: 'bold' }}>Email : </label>
				<input type="text" id="name" name="email" required value={formData.password} onChange={handleChange} style={{ padding: '8px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box', marginTop: '8px', marginBottom: '16px' }} />
			</form>
                  </Modal.Body>
                  <Modal.Footer>
                   
                    <Button variant="danger" onClick={()=>{handleSubmit();}}>Submit</Button>
                  </Modal.Footer>
                </Modal>
 
      </div>
     </div>
        <center>
        <button type="submit" className="btn btn-success" style={{ padding: "10px 20px" }}>
  Submit
  </button>
        </center>
        </form>
        </div>
    </div>
</div>
      
      );
    }
  }

export default Login;
