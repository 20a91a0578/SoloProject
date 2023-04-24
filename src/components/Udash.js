import React from 'react';
import { Table } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import { FaMapMarkerAlt,FaFacebookF,FaInstagramSquare,FaTwitter} from 'react-icons/fa';
function Udash(props) {
  function reload(){
    window.location.reload();
  }
  const [details,setdeatils]=useState({});
  const [userstatus,setuser]=useState([])
  const [stat,setStat]=useState('Absent');
  let [atten,setatten]=useState(0);
  const getuserstat=async()=>{
    const result=await fetch('http://localhost:8009/userstat/'+props.username,{
      method:"GET",
    })
    let date=new Date().toLocaleDateString();
    
    const rk=await result.json();
  
    setuser(rk);
    rk.forEach(element => {
      if(element.status==="Present")
      {
       
        setatten(atten+=1)
      }
      if(element.date===date){
        setStat(element.status);
      }
      
    });
   
  }
  
  const getuser=async()=>{
    const result=await fetch('http://localhost:8009/user/'+props.username,{
      method:"GET"
    })
    const rk=await result.json();
   
    setdeatils(rk[0]);
  }
  useEffect(()=>{
    getuser()
    getuserstat()
   
  },[])
  return (
   <>
   <div style={{ backgroundColor: '#495788', color: 'white', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
    <h2 style={{ margin: '0' }}>Aditya Engineering College</h2>
    <br/>
    <div className='row' style={{marginTop:'-2%'}}>
      <div className='col-md-1 offset-md-11'><button onClick={reload} style={{backgroundColor:"#495788",border:'0px solid #495788',color:'white'}}>Logout</button></div>
    </div>
    
</div>
<div className='row'>
  <center><h3>Today's Class Status :{stat}</h3></center>
  <div className='row' style={{boxShadow:'5px 5px 4px'}}>
    <div className='col-md-2'><h3 style={{marginLeft:'8 %'}}><b>Total classes:{userstatus.length}</b></h3></div>
    <div className='col-md-2 offset-md-8'><h3>Attended:{atten/2}</h3></div>
  </div>
</div>

<div className='row' style={{marginTop:'2%',marginLeft:'2%'}}>
  
<center><h2><b>Details:</b></h2></center><br/><br/><br/>
 <div className='row' style={{boxShadow:'5px 5px 4px'}}>
 <div className='col-md-4 offset-md-1' >
  <Table responsive>
    <thead></thead>
    <tbody>
      <tr><td><h4>Name :&nbsp;{details.name}  </h4></td></tr>
      <tr><td><h4>Email :&nbsp;{details.email} </h4></td></tr>
      <tr><td><h4>DOB :&nbsp;{details.dob} </h4></td></tr>
      <tr><td><h4>Year of Study :&nbsp;{details.academicyear} </h4></td></tr>
      <tr><td><h4>Branch :&nbsp;{details.branch} </h4></td></tr>
      <tr><td><h4>Address :&nbsp;{details.address} </h4></td></tr>
    </tbody>
  </Table>

  </div>
  <div className='col-md-5 offset-md-1'>
  <Table responsive>
    <thead></thead>
    <tbody>
      <tr><td><h4>Roll Number :&nbsp;{details.rollnumber} </h4></td></tr>
      <tr><td><h4>Mobile :&nbsp; {details.mobile}  </h4></td></tr>
      <tr><td><h4>CGPA :&nbsp;{details.cgpa}</h4></td></tr>
      <tr><td><h4>Backlogs :&nbsp;{details.backlog} </h4></td></tr>
      <tr><td><h4>College :&nbsp;{details.college} </h4></td></tr>
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

export default Udash;
