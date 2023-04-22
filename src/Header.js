import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    const props={
username:"Rajesh"
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
            </ul>
        </nav>
    </div>
</div>

   
   </>
  )
}

export default Header
