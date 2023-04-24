import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
const Rows=(props)=>{
  return(
    <>
    <tr>
      <td>{props.sno}</td>
      <td>{props.name}</td>
      <td>{props.rollnumber}</td>
      <td>{props.branch}</td>
      <td>{props.college}</td>
    </tr>
    </>
  )
}
function Attendance() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 const [rollnum,setrollnum]=useState('');
 const [details,setdetails]=useState([{
  name:'',
  rollnumber:'',
  email:'',
  branch:'',
  college:''
 }]);
 const [absentss,setabs]=useState([]);
 const handleSubmit=async()=>{
  console.log(rollnum)
  const result = await fetch('http://localhost:8009/details/'+rollnum,{
    method:"GET"
  })
  const rt=await result.json();
  setdetails(rt);
  console.log(rt);
 }
 const handleClos=async()=>{
 const result=await fetch('http://localhost:8009/finalabsent',{
  method:"GET"
 })
 const res=await result.json();
 setabs(res);
 handleShow();
 }
 const print=()=>{
  const table = document.getElementById('abs');

// Create a new PDF document
const doc = new jsPDF();

// Convert the HTML table to a canvas using html2canvas
html2canvas(table).then((canvas) => {
  // Add the canvas to the PDF document
  const imgData = canvas.toDataURL('image/png');
  doc.addImage(imgData, 'PNG', 10, 10,180,0);

  // Save the PDF
  doc.save('Absentesslist.pdf');
  handleClose();
});
 }

  return (
<>
    <div className='row'>
     <div className='row' style={{marginTop:'1%'}}>
      <div  className='col-md-1 offset-md-11'>
        {/* <button className='btn btn-danger' onClick={handleClos}>Close</button> */}
        <Button variant="danger" style={{float:'right',fontSize:'15px'}} onClick={handleClos}>Close</Button>
     <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>ABSENTE's List</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                   <Table responsive bordered='true' id="abs">
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>RollNumber</th>
                        <th>Branch</th>
                        <th>College</th>
                      </tr>
                    </thead>
                    <tbody>
                    {absentss.map((ele,i)=>{return(<Rows sno={i+1} name={ele.name} rollnumber={ele.rollnumber} branch={ele.branch} college={ele.college}/>)})}
                    </tbody>
                   </Table>
                   
                  </Modal.Body>
                  <Modal.Footer>
                   
                    <Button variant="danger" onClick={print}>
                      Submit
                    </Button>
                  </Modal.Footer>
                </Modal>
 
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
            <th>Name :</th>
            <td>&nbsp;{details[0].name}</td>
            </tr>
            <tr>
            <th>Roll Number:</th>
            <td>&nbsp;{details[0].rollnumber}</td>
            </tr>
            <tr>
            <th>Email:</th>
            <td>&nbsp;{details[0].email}</td>
            </tr>
            <tr>
            <th>Branch:</th>
            <td>&nbsp;{details[0].branch}</td>
            </tr>
            <tr>
            <th>College:</th>
            <td>&nbsp;{details[0].college}</td>
            </tr>
          </tbody>
        </Table>
        
      </div>
     </div>
    </div>
</>
  )
}

export default Attendance;
