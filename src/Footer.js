import React from 'react';
import { FaMapMarkerAlt,FaFacebookF,FaInstagramSquare,FaTwitter} from 'react-icons/fa';
function Footer() {
   
  return (
    <>
    <div className='row' style={{ backgroundColor: '#495788', color: 'white', justifyContent: 'space-between', alignItems: 'center',border:'1px solid black ',marginTop:'1%' }}>
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
            <h3>Follow us on :  <FaFacebookF/> &nbsp;<FaInstagramSquare/>&nbsp; &nbsp;<FaTwitter/></h3>
    
        </div>
    </div>
    </div>
  

    </>
  )
}

export default Footer
