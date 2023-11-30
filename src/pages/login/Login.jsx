// Login.js

import React, { useState } from 'react';
import '../signup/style.scss';
import Modal from '../signup/modal/Modal';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
const [registeredUsers, setRegisteredUsers] = useState([])
  const [modalMessage, setModalMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate()
  // Retrieve registeredUsers from localStorage, or initialize an empty array
  const registeredUsers1 = JSON.parse(localStorage.getItem('userData')) || [];
  registeredUsers.push(registeredUsers1)

//   console.log("c",registeredUsers)
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if any input field is empty
    if (Object.values(formData).some((value) => value === '')) {
      setModalMessage('Please enter all details first.');
      setIsModalOpen(true);
      return;
    }
  
    // Check if the entered email and password match any registered user
    let userFound = false;
  
    for (let i = 0; i < registeredUsers.length; i++) {
    //   const user = registeredUsers[i];
      if (registeredUsers[i].email === formData.email && registeredUsers[i].password === formData.password) {
        userFound = true;
        console.log("a",registeredUsers[i].email)
        console.log("b",formData.email)
        // break;
      }
    }
  
    if (userFound){
      // Reset form data
      setFormData({
        email: '',
        password: '',
      });
  
      // Show success alert
      setModalMessage('Login successfully!');
      setTimeout(()=>{
        navigate("/")
      },2000)
    } else {
      // Show error alert
      setModalMessage('Something went wrong. Please check your email and password.');
    }
  
    setIsModalOpen(true);
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
        <button type="submit">Login</button>
      </form>
      {isModalOpen && <Modal message={modalMessage} onClose={closeModal} />}
    </div>
  );
};

export default Login;
