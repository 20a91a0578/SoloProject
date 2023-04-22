import React from 'react'
import { FaMapMarkerAlt,FaFacebookF,FaInstagramSquare,FaTwitter} from 'react-icons/fa';
function Udash() {
  const props={
    username:'rajesh'
  }
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
 <div className='col-md-4 offset-md-2' >
  <h3>Name:{props.username}</h3>
  <h3>Email:</h3>
  <h3>DOB:</h3>
  <h3>YEAR:</h3>
  <h3>Branch</h3>
  <h3>Address</h3>
  </div>
  <div className='col-md-5 offset-md-1'>
    <h3>Roll Number:</h3>
    <h3>Mobile:</h3>
    <h3>CGPA:</h3>
    <h3>Backlog:</h3>
    <h3>College</h3>
    <h3>Remarks:</h3>
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
