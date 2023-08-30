import React from 'react';
import { useState,useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
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
function Dash() {
  const props={
    username:localStorage.getItem('username')
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // function reload(){
  //   window.location.reload();
  // }
  const [formData, setFormData] = useState({
    username:props.username,
		password: '',
		cpassword: '',
		
	});

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
  async function handleRetake(){
    var a=prompt("If you want to take the Attendance\n Type YES to Retake ");
    if(a==='YES'||a==='yes')
    {
      const resp=await fetch('http://localhost:8006/retake',{
        method:'GET',
      })
      const ro=await resp.json();
      console.log(ro);
    }
    

  }
	const handleSubmit = async() => {
    handleClose();
const respon= await fetch('http://localhost:8006/updatepassword',{
  method:'POST',
  body:JSON.stringify(formData),
  headers:{
    "Content-Type":"application/json"
  }
});
console.log(respon);

	};
  
  const [students,setStudents]=useState([]);
  const [total,settotal]=useState('');
  const [present,setpresent]=useState('');
  const getCount=async()=>{
const result=await fetch('http://localhost:8006/count',{
  method:"GET"
})
const cou=await result.json();
settotal(cou.total)
setpresent(cou.presents)
  }
  const getStudents=async()=>{
    const result=await fetch('http://localhost:8006/getabsents',{
      method:"GET"
    })
    const res=await result.json();
    setStudents(res);
  }
  useEffect(()=>{
    getCount()
    getStudents()
   
  },[])
  return (
 <>
<Header username={props.username}/>
    <div>
    <div className='row' style={{marginTop:'1%'}}>
      <div  className='col-md-2 offset-md-10'>
      <button className='btn btn-danger' style={{marginBottom:'4%'}} onClick={handleRetake}>Retake</button>
        <Button variant="danger" style={{float:'right',fontSize:'15px'}} onClick={handleShow}>Change Password</Button>
     <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Change Password</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p id='error' style={{color:'red'}}></p>
        <form style={{ maxWidth: '500px', width: '100%' }} onSubmit={handleSubmit}>
				<label htmlFor="name" style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
					New Password:
				</label>
				<input type="text" id="name" name="password" required value={formData.password} onChange={handleChange} style={{ padding: '8px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box', marginTop: '8px', marginBottom: '16px' }} />

				<label htmlFor="rollnumber" style={{ fontSize: '18px', fontWeight: 'bold' }}>
				Confirm Password :
				</label>
				<input type="text" id="rollnumber" name="cpassword" required value={formData.cpassword} onChange={handleChange} style={{ padding: '8px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box', marginTop: '8px', marginBottom: '16px' }} />
</form>
                  </Modal.Body>
                  <Modal.Footer>
                   
                    <Button variant="danger" onClick={()=>{
                      if(formData.password===formData.cpassword)
                      {
                        handleSubmit();
                      }
                      else
                      {
                        document.getElementById("error").innerHTML="Password and Confirm Password doesn't match";
                        setFormData({
                          password:"",
                          cpassword:""
                        })
                      }
                    }}>
                      Submit
                    </Button>
                  </Modal.Footer>
                </Modal>
 
      </div>
     </div>
     <div className='row'>
      <div className='col-md-10' style={{width:'86vw',marginLeft:'8%'}}>
        <div className='row' style={{marginTop:'1%',boxShadow:'5px 5px 4px' ,border:'1px solid black'}}>
          
          <div className='col-md-2'><h3 style={{paddingLeft:'1%',marginTop:'7%'}}>Total :&nbsp;{total}</h3></div>
          <div className='col-md-2 offset-md-8' style={{paddingRight:'1%'}}><h3 style={{marginTop:'7%'}}>Today: {present}</h3></div>
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
    
  <Footer/>
 </>
  )
}

export default Dash
