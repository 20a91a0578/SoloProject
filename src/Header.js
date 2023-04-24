import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogOut } from "react-icons/fi";
function Header(props) {
  function reload(){
    window.location.reload();
  }
  return (
   <>
   <div style={{ backgroundColor: '#495788', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
    <h1 style={{ margin: '0' }}>Aditya Engineering College</h1>
    <div>
    <br/>
        <p style={{ margin: '0', marginRight: '10px' }}>Welcome, {props.username}!</p>
        <nav style={{ display: 'inline-block' }}>
            <ul style={{ listStyleType: 'none', margin: '0', padding: '0' }}>
                <li style={{ display: 'inline-block', marginRight: '10px' }}><Link to='/dashboard'>DashBoard</Link></li>
                <li style={{ display: 'inline-block', marginRight: '10px' }}><Link to='/attendance'>Attendance</Link></li>
                <li style={{ display: 'inline-block', marginRight: '10px' }}><Link to='/addupdate'>Student_details</Link></li>
                <li style={{ display: 'inline-block' }}><Link to='/remove'>Remove</Link></li>
                <li style={{ display: 'inline-block', marginLeft: '10px' }}><button onClick={reload} style={{backgroundColor:"#495788",border:'0px solid #495788',color:'white'}}><FiLogOut/></button></li>
            </ul>
        </nav>
    </div>
</div>

   
   </>
  )
}

export default Header
