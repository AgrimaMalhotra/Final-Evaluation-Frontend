import React, { useState } from 'react';
import './RegisterForm.css';
import { useNavigate } from 'react-router-dom';
import { makeAuthRequest } from '../../utils/makeRequest/makeRequest';
import {REGISTER_USER } from '../../constants/apiEndPoints';
import { LOGIN_ROUTE } from '../../constants/routes';
import CmsImage from '../CmsImage';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({name: '', email: '', password: ''});
  const [error, setError] = useState(null);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDetails(prevState => ({ ...prevState, [name]: value }));
  };
  
  const handleSubmit = async () => {
    try {
      await makeAuthRequest(REGISTER_USER(),navigate, {  
        data:{...userDetails}
      }
      );
      navigate(LOGIN_ROUTE);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='registration-page'>
      <CmsImage />
      <div className='register-section'>
        <p>Register your CMS+ account now!</p>
        <div className='register-form'>
          <p>Name</p>
          <input type="text"
            name="name"
            value={userDetails.name}
            onChange={handleInputChange} />
            
          <p>Email</p>
          <input type="email"
            name="email"
            value={userDetails.email}
            onChange={handleInputChange} />

          <p>Password</p>
          <input type="password"
            name="password"
            value={userDetails.password}
            onChange={handleInputChange} />

          <br />
          {error? <p className='error'>{error}</p>: null}
          <button
            type="submit"
            disabled={userDetails.name === '' || userDetails.password === ''|| userDetails.email=== ''}
            onClick={handleSubmit}
          > Register </button>
          <p className='have-account' onClick={() => {
            navigate(LOGIN_ROUTE);
          }}>Already have an account</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;