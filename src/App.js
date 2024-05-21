import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Doctors from './components/Doctors';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import NotFound from './components/NotFound';
import AddDoctor from './components/createdoc';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element: Element, ...rest }) => {
    return isAuthenticated ? <Element /> : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <div className="container">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<PrivateRoute element={Doctors} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/add-doctor" element={<PrivateRoute element={AddDoctor} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
