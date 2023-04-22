import React from 'react'
import { useState } from 'react';
import { Table } from 'react-bootstrap';
function Remove() {
  const [rollnum,setrollnum]=useState('');
 function handleSubmit(){
  alert(rollnum);
 }

  return (
<>
    <div className='row'>
     <div className='row' style={{marginTop:'1%'}}>
      
     </div>
     <div className='row' style={{marginTop:'1%',marginLeft:'4%',boxShadow:'5px 5px 4px',width:'94vw'}}>
     <h3>Enter the Student Roll  Number you want to remove:</h3>

     <br/>
     <br/>
     <input type='text' name="rollnum" value={rollnum} onChange={(e)=>{setrollnum(e.target.value)}} style={{width:'85vw',borderRadius:'10px',backgroundColor:'rgb(184, 175, 189)',marginLeft:'4%',color:'white'}}/>
     
     <div className='col-md-1 offset-md-11'>
     <br/>
     <button className='btn btn-danger' style={{marginBottom:'4%'}} onClick={handleSubmit}>Remove</button>
    
     </div>
     
     </div>
    
     <div className='cold-md-12'  style={{marginTop:'1%',boxShadow:'5px 5px 4px',width:'94vw',marginLeft:'4%',border:'1px solid black'}}>
      <div className='row'>
        <div className='col-md-3'><h3>Student's Details:</h3></div>
        <div className='col-md-3 offset-md-6'><h3>Count: </h3></div>
      </div>
      <div className='tbl-container' id='table'>
              <div className='tbl-fixed'>
              <Table responsive bordered='true' >
                <thead>
                <tr >
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Role Number</th>
                  <th>Email</th>
                  <th>Branch</th>
                  <th>College</th>
                 
                </tr>
                </thead>
                <tbody>
  
                 </tbody>
             
              </Table>
              </div>
              <br/>
            
            </div>
      </div>
    </div>
</>
  )
}

export default Remove;
