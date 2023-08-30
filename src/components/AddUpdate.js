import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import { useState } from 'react';
function AddUpdate() {
	const props={
username:localStorage.getItem('username')
	}
  const [formData, setFormData] = useState({});

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
		console.log(formData);
	};

	const handleSubmit = async(event) => {
		event.preventDefault();
		const result=await fetch('http://localhost:8006/addupdate',{
			method:'POST',
			body:JSON.stringify(formData),
			headers:{
				"Content-Type":"application/json"
			}
		})
		console.log(result);
	};

	return (
	<><Header username={props.username}/>
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Arial, sans-serif' }}>
			<h1>Add Student Information Form</h1>
			<form style={{ maxWidth: '500px', width: '100%' }} onSubmit={handleSubmit}>
				<label htmlFor="name" style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
					Name:
				</label>
				<input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} style={{ padding: '8px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box', marginTop: '8px', marginBottom: '16px' }} />

				<label htmlFor="rollnumber" style={{ fontSize: '18px', fontWeight: 'bold' }}>
					Roll Number:
				</label>
				<input type="text" id="rollnumber" name="rollnumber" required value={formData.rollnumber} onChange={handleChange} style={{ padding: '8px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box', marginTop: '8px', marginBottom: '16px' }} />

				<label htmlFor="email" style={{ fontSize: '18px', fontWeight: 'bold' }}>
					Email:
				</label>
				<input type="text" id="email" name="email" required value={formData.email} onChange={handleChange} style={{ padding: '8px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box', marginTop: '8px', marginBottom: '16px' }} />
				<label htmlFor="name" style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
					Mobile:
				</label>
				<input type="text" id="name" name="mobile" required value={formData.mobile} onChange={handleChange} style={{ padding: '8px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box', marginTop: '8px', marginBottom: '16px' }} />

				<label htmlFor="branch" style={{ fontSize: '18px', fontWeight: 'bold' }}>
					Branch:
				</label>
				<select id="branch" name="branch" required value={formData.branch} onChange={handleChange} style={{ padding: '8px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box', marginTop: '8px', marginBottom: '16px' }}>
					<option value="">Select Branch</option>
					<option value="CSE">Computer Science Engineering</option>
					<option value="ECE">Electronics and Communication Engineering</option>
					<option value="MECH">Mechanical Engineering</option>
					<option value="CIVIL">Civil Engineering</option>
				</select>

				<label htmlFor="college" style={{ fontSize: '18px', fontWeight: 'bold' }}>
					College:
				</label>
				<input type="text" id="college" name="college" required value={formData.college} onChange={handleChange} style={{ padding: '8px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box', marginTop: '8px', marginBottom: '16px' }} />

                <label htmlFor="backlog" style={{ fontSize: '18px', fontWeight: 'bold' }}>
				Backlog:
			</label>
			<input type="number" id="backlog" name="backlog" required value={formData.backlog} onChange={handleChange} style={{ padding: '8px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box', marginTop: '8px', marginBottom: '16px' }} />

			<label htmlFor="cgpa" style={{ fontSize: '18px', fontWeight: 'bold' }}>
				CGPA:
			</label>
			<input type="number" id="cgpa" name="cgpa" step="0.01" min="0" max="10" required value={formData.cgpa} onChange={handleChange} style={{ padding: '8px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box', marginTop: '8px', marginBottom: '16px' }} />

			<label htmlFor="dob" style={{ fontSize: '18px', fontWeight: 'bold' }}>
				Date of Birth:
			</label>
			<input type="date" id="dob" name="dob" required value={formData.dob} onChange={handleChange} style={{ padding: '8px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box', marginTop: '8px', marginBottom: '16px' }} />

			<label htmlFor="academicyear" style={{ fontSize: '18px', fontWeight: 'bold' }}>
				Academic Year:
			</label>
			<select id="academicyear" name="academicyear" required value={formData.academicyear} onChange={handleChange} style={{ padding: '8px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box', marginTop: '8px', marginBottom: '16px' }}>
				<option value="">Select Academic Year</option>
				<option value="1">First Year</option>
				<option value="2">Second Year</option>
				<option value="3">Third Year</option>
				<option value="4">Fourth Year</option>
			</select>

			<label htmlFor="address" style={{ fontSize: '18px', fontWeight: 'bold' }}>
				Address:
			</label>
			<textarea id="address" name="address" required value={formData.address} onChange={handleChange} style={{ padding: '8px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box', marginTop: '8px', marginBottom: '16px' }}></textarea>

			<button type="submit" style={{ padding: '8px', fontSize: '16px', borderRadius: '5px', border: 'none', backgroundColor: '#4CAF50', color: 'white', width: '100%', cursor: 'pointer', marginTop: '16px', marginBottom: '8px' }}>Add/Update</button>
</form>
</div>
<Footer/>
	</>
);
}

export default AddUpdate
