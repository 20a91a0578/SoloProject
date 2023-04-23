import React from 'react';
import { Table } from 'react-bootstrap';
import { FaMapMarkerAlt,FaFacebookF,FaInstagramSquare,FaTwitter} from 'react-icons/fa';
function Udash() {
  const props={
    username:'rajesh'
  }
  const date = new Date();
const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
const formatter = new Intl.DateTimeFormat('en-US', options);
const formattedDate = formatter.format(date);
console.log(formattedDate);
  return (
   <>
   <div style={{ backgroundColor: '#495788', color: 'white', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
    <h2 style={{ margin: '0' }}>Aditya Engineering College</h2>
    <br/>
    
</div>
<div className='row'>
  <center><h3>Today's Class Status :</h3></center>
  <div className='row' style={{boxShadow:'5px 5px 4px'}}>
    <div className='col-md-2'><h3 style={{marginLeft:'8 %'}}><b>Total classes:</b></h3></div>
    <div className='col-md-2 offset-md-8'><h3>Attended:</h3></div>
  </div>
</div>

<div className='row' style={{marginTop:'2%',marginLeft:'2%'}}>
  
<center><h2><b>Details:</b></h2></center><br/><br/><br/>
 <div className='row' style={{boxShadow:'5px 5px 4px'}}>
 <div className='col-md-4 offset-md-1' >
  <Table responsive>
    <thead></thead>
    <tbody>
      <tr><td><h4>Name :  {props.username}</h4></td></tr>
      <tr><td><h4>Email : </h4></td></tr>
      <tr><td><h4>DOB : </h4></td></tr>
      <tr><td><h4>Year of Study : </h4></td></tr>
      <tr><td><h4>Branch : </h4></td></tr>
      <tr><td><h4>Address : </h4></td></tr>
    </tbody>
  </Table>

  </div>
  <div className='col-md-5 offset-md-1'>
  <Table responsive>
    <thead></thead>
    <tbody>
      <tr><td><h4>Roll Number : </h4></td></tr>
      <tr><td><h4>Mobile :  </h4></td></tr>
      <tr><td><h4>CGPA : </h4></td></tr>
      <tr><td><h4>Backlogs : </h4></td></tr>
      <tr><td><h4>College : </h4></td></tr>
      <tr><td><h4>Remarks : </h4></td></tr>
    </tbody>
  </Table>
  </div>
  &nbsp;
 </div>
&nbsp;
</div>



<div className='row' style={{ backgroundColor: '#495788', color: 'white', justifyContent: 'space-between', alignItems: 'center',border:'1px solid black ',marginTop:'3%' }}>
    <div className='row'>
    <div className='col-md-4' >
    <h3 style={{ margin: '0' }}>Aditya Engineering College</h3>
    </div>
    </div>
    <div className='row'>
    <div className='col-md-8 offset-md-2'>
        <br/>
           
           
                <address>
        <FaMapMarkerAlt/>    ADITYA ENGINEERING COLLEGE
       Aditya Nagar, ADB Road,
       Surampalem - Pin:533437
       East-Godavari District,       
       Andhra Pradesh,
       INDIA.
            </address>
             
         
        </div>
     
          <div className='col-md-4 offset-md-5'>
            <h3>Follow us on :  <FaFacebookF/> &nbsp;<FaInstagramSquare/>&nbsp;<FaTwitter/></h3>
    
        </div>
    </div>
    </div>
  

   </>
  )
}

export default Udash
