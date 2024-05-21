import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/nav.css";

const Navigation = () => {
  return (
    <div className="wrapper">
      <nav className="navbar navbar-expand-lg navbar-light bg-lightblue">
        <div className="container">
          <Link className="navbar-brand" to="/">Doctor Management</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/doctors">Doctors</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <footer className="footer bg-lightblue fixed-bottom">
        <div className="container text-center py-3">
        <h5 style={{textAlign:'right'}}>Contact Us</h5>
        <div style={{textAlign:'right'}}>Contact Number: 1234567890</div>
        <div style={{textAlign:'right'}}>Email: test@gmail.com</div>
        <div style={{textAlign:'right'}}>Address: 123 Street, Chennai, India</div>
          <span className="text-muted">© 2024 Doctor Management</span>
        </div>
      </footer>
    </div>
  );
}

export default Navigation;
