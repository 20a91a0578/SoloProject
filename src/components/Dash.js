import React from 'react'
import { Navigate } from 'react-router-dom'
function Dash() {
  return (
 <>
 <Navigate to='/Dashboard'/>
    <div>
      <h1>Dash</h1>
    </div>
 </>
  )
}

export default Dash
