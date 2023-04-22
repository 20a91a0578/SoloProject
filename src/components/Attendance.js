import React from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
function Attendance() {
 const [rollnum,setrollnum]=useState('');
 function handleSubmit(){
  alert(rollnum);
 }
 function handleClose(){
  alert('close')
 }
  return (
<>
    <div className='row'>
     <div className='row' style={{marginTop:'1%'}}>
      <div  className='col-md-1 offset-md-11'>
        <button className='btn btn-danger' onClick={handleClose}>Close</button>
      </div>
     </div>
     <div className='row' style={{marginTop:'1%',marginLeft:'4%',boxShadow:'5px 5px 4px',width:'94vw'}}>
     <h3>Scan here:</h3>
     <br/>
     <input type='text' name="rollnum" value={rollnum} onChange={(e)=>{setrollnum(e.target.value)}} style={{width:'90vw',borderRadius:'10px',backgroundColor:'rgb(184, 175, 189)',color:'white'}}/>
     
     <div className='col-md-1'>
     <br/>
     <button className='btn btn-success' style={{marginBottom:'4%'}} onClick={handleSubmit}>Submit</button>
    
     </div>
     
     </div>
    
     <div className='row' style={{marginTop:'3%'}}>
     
      <center ><h2><b>Student Details</b></h2></center>
      <div className='col-md-4 offset-md-4' style={{boxShadow:'5px 5px 4px'}}>
        <Table responsive bordered='true'>
          <thead></thead>
          <tbody>
            <tr>
            <th>Name:</th>
            <td>&nbsp;</td>
            </tr>
            <tr>
            <th>Roll Number:</th>
            <td>&nbsp;</td>
            </tr>
            <tr>
            <th>Email:</th>
            <td>&nbsp;</td>
            </tr>
            <tr>
            <th>Branch:</th>
            <td>&nbsp;</td>
            </tr>
            <tr>
            <th>College:</th>
            <td>&nbsp;</td>
            </tr>
          </tbody>
        </Table>
        
      </div>
     </div>
    </div>
</>
  )
}

export default Attendance
