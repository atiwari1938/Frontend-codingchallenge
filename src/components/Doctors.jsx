import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Doctors.css'; 

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://localhost:3001/doctors/getalldoctors');
        if (!response.ok) {
          throw new Error('Failed to fetch doctors');
        }
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error.message);
      }
    };

    fetchDoctors();
  }, []);

  const handleDelete = async (doctorId) => {
    try {
      const response = await fetch(`http://localhost:3001/doctors/deletedoctor/${doctorId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete doctor');
      }
      setDoctors(doctors.filter(doctor => doctor.doctorId !== doctorId));
    } catch (error) {
      console.error('Error deleting doctor:', error.message);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Doctors Page</h1>
        <Link to="/add-doctor" className="btn btn-primary">Add Doctor</Link>
      </div>
      <div className="row mt-4">
        {doctors.map(doctor => (
          <div key={doctor.doctorId} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{doctor.doctorName}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{doctor.speciality}</h6>
                <p className="card-text">Contact: {doctor.contactNumber}</p>
                <p className="card-text">Email: {doctor.email}</p>
                <p className="card-text">Degree: {doctor.degree}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(doctor.doctorId)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
