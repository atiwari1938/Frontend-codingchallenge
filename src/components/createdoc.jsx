import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AddDoctor.css'; 

const AddDoctor = () => {
  const [formData, setFormData] = useState({
    doctorName: '',
    contactNumber: '',
    email: '',
    speciality: '',
    degree: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/doctors/createdoctor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to add doctor');
      }
      alert("Doctor added sucessfully");
      navigate('/doctors');
    } catch (error) {
        alert("Failed to add doctor");
    
      console.error('Error adding doctor:', error.message);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Doctor</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="doctorName" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="doctorName"
            name="doctorName"
            value={formData.doctorName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contactNumber" className="form-label">Contact Number</label>
          <input
            type="text"
            className="form-control"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="speciality" className="form-label">Speciality</label>
          <input
            type="text"
            className="form-control"
            id="speciality"
            name="speciality"
            value={formData.speciality}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="degree" className="form-label">Degree</label>
          <input
            type="text"
            className="form-control"
            id="degree"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Doctor</button>
      </form>
    </div>
  );
};

export default AddDoctor;