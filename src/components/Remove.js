import React from 'react'
import { useState,useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';
function Rows(props){
  return(
    <>
    <tr>
      <td>{props.sno}</td>
      <td>{props.name}</td>
      <td>{props.rollnumber}</td>
      <td>{props.email}</td>
      <td>{props.branch}</td>
      <td>{props.college}</td>
    </tr>
    </>
  )
}

function Remove() {
  const props={
    username:localStorage.getItem('username')
  }
  const [rollnum,setrollnum]=useState({});
  const [students,setStudents]=useState([]);
 const handleSubmit=async()=>{

  var reason=prompt("Enter the reason for removal of the student")
  var na=rollnum["rollnum"];
  if(reason===""){
    handleSubmit();
  }
  else
{
  var res={rollnum:na,reason:reason};
  console.log(res);
}
const result=await fetch('http://localhost:8006/deleteStudents',{
  method:'POST',
  body:JSON.stringify(res),
  headers:{
    "Content-Type":"application/json"
  }
}) 
console.log(result);
}
 const getsutdent=async()=>{
  const result=await fetch('http://localhost:8006/getstudents',{
    method:'GET'
  })
  const student=await result.json();
  console.log(student);
  setStudents(student);
 }
 useEffect(() => {
  getsutdent()
});

  return (
<>
<Header username={props.username}/>
    <div className='row'>
   
     <div className='row' style={{marginTop:'1%',marginLeft:'4%',boxShadow:'5px 5px 4px',width:'94vw',borderRadius:'10px'}}>
     <h3>Enter the Student Roll  Number you want to remove:</h3>

     <br/>
     <br/>
     <input type='text' name="rollnum" value={rollnum.rollnum} onChange={(e)=>{setrollnum({[e.target.name]:e.target.value})}} style={{width:'85vw',borderRadius:'10px',backgroundColor:'rgb(184, 175, 189)',marginLeft:'4%',color:'white'}}/>
     
     <div className='row'>
     <div className='col-md-1 offset-md-11'>
     <br/>
     
     <button className='btn btn-danger' style={{marginBottom:'4%'}} onClick={handleSubmit}>Remove</button>
    
     </div>
     </div>
     
     </div>
    
     <div className='cold-md-12'  style={{marginTop:'1%',boxShadow:'5px 5px 4px',width:'94vw',marginLeft:'4%',border:'1px solid black',borderRadius:'5px'}}>
      <div className='row'>
        <div className='col-md-3'><h3>Student's Details:</h3></div>
        <div className='col-md-3 offset-md-6'><h3>Count:{students.length} </h3></div>
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
                {/* (<Rows sno={i} name={ele.name} rollnumber={ele.rollnumber} email={ele.email} branch={ele.branch} college={ele.college}/>) */}
                <tbody>
                {students.map((ele,i)=>{return(<Rows sno={i+1} name={ele.name} rollnumber={ele.rollnumber} email={ele.email} branch={ele.branch} college={ele.college}/>)})}
                     
                 </tbody>
             
              </Table>
              </div>
              <br/>
            
            </div>
      </div>
    </div>
    <Footer/>
</>
  )
}

export default Remove;
