import React from 'react';
import { useState,useEffect } from 'react';
import { Table } from 'react-bootstrap';
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
function Dash() {
  const dates=new Date();
  console.log(dates)
  const [students,setStudents]=useState([]);
  const getStudents=async()=>{
    const result=await fetch('http://localhost:8009/getabsents',{
      method:"GET"
    })
    const res=await result.json();
    setStudents(res);
  }
  useEffect(()=>{
    getStudents()
  },[])
  return (
 <>

    <div>
     <div className='row'>
      <div className='col-md-10' style={{width:'86vw',marginLeft:'8%'}}>
        <div className='row' style={{marginTop:'1%',boxShadow:'5px 5px 4px' ,border:'1px solid black'}}>
          
          <div className='col-md-2'><h3 style={{paddingLeft:'1%',marginTop:'7%'}}>Total :&nbsp;</h3></div>
          <div className='col-md-2 offset-md-8' style={{paddingRight:'1%'}}><h3 style={{marginTop:'7%'}}>Today's Count: &nbsp;</h3></div>
        </div>
      </div>
      <div className='cold-md-12'  style={{marginTop:'1%',boxShadow:'5px 5px 4px',width:'93vw',marginLeft:'4%',border:'1px solid black'}}>
      <h3>Absentee's Details:</h3>
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
                {students.map((ele,i)=>{return(<Rows sno={i+1} name={ele.name} rollnumber={ele.rollnumber} email={ele.email} branch={ele.branch} college={ele.college}/>)})}
                 
                 </tbody>
             
              </Table>
              </div>
              <br/>
            
            </div>
      </div>
     </div>
    </div>
 </>
  )
}

export default Dash
