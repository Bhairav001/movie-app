// SignUpForm.js

import React, { useState } from 'react';
import './style.scss';
import Modal from './modal/Modal';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    const navigate = useNavigate()
      const [modalMessage, setModalMessage] = useState('');
      const [isModalOpen, setIsModalOpen] = useState(false);
    
      const handleSubmit = (e) => {
        e.preventDefault();

    // Check if any input field is empty
    if (Object.values(formData).some((value) => value === '')) {
      setModalMessage('Please enter all details first.');
      setIsModalOpen(true);
      return;
    }
    
        // Store data in localStorage
        localStorage.setItem('userData', JSON.stringify(formData));
    
        // Reset form data
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
    
        // Show success alert
        setModalMessage('Register successfully!');
        setIsModalOpen(true);
        setTimeout(()=>{
            navigate("/login")
        },2000)
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
  return (
    <div className="signup-container">
    <form className="signup-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleChange}
      />

      <label htmlFor="confirm-password">Confirm Password</label>
      <input
        type="password"
        id="confirm-password"
        name="confirmPassword"
        placeholder="Confirm your password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />

      <button type="submit">Sign Up</button>
    </form>
    {isModalOpen && (
        <Modal message={modalMessage} onClose={closeModal} />
      )}
  </div>
  );
};

export default Signup;
