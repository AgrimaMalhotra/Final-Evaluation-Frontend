import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeAuthRequest } from '../../utils/makeRequest/makeRequest';
import { LOGIN_USER } from '../../constants/apiEndPoints';
import './LoginForm.css';
import { DASHBOARD_ROUTE } from '../../constants/routes';
import CmsImage from '../CmsImage';

const LoginForm = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({ email: '', password: ''});
  const [, setError] = useState(null);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDetails(prevState => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async () => {
    try {
      const responseData = await makeAuthRequest(LOGIN_USER(),navigate, {
        data: {
          ...userDetails,
        },
      });
      localStorage.setItem('auth_token', responseData.token);
      navigate(DASHBOARD_ROUTE);
     
    } catch (error) {
      console.log(error);
      setError(error);
      setTimeout(() => {
        setError(null);
      }, 4000);
    }
  };
  return (
    <div className='login-page'>
      <CmsImage />
      <div className='login-section'>
        <p>Login to your CMS+ account</p>
        <div className='login-form'>
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

          <button
            type="submit"
            disabled={ userDetails.password === ''|| userDetails.email=== ''}
            onClick={handleSubmit}>Login</button>
          <p className='forgot-pwd'>Forgot password?</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;