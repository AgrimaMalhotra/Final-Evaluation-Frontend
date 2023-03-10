import axios from 'axios';
import { BACKEND_URL, AUTH_BACKEND_URL } from '../../constants/apiEndPoints';
import { ERROR_ROUTE } from '../../constants/routes';

const makeRequest = async (
  apiEndPoint,
  navigate,
  token,
  dynamicConfig = {}
) => {
  try {
    const requestDetails = {
      baseURL: BACKEND_URL,
      url: apiEndPoint.url,
      method: apiEndPoint.method,
      ...dynamicConfig,
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const {data} = await axios(requestDetails);
    return data;
  } catch (error) {
    const errorStatus = error.response?.status;
    if (!errorStatus) {
      navigate(ERROR_ROUTE);
    } else {
      navigate(`${ERROR_ROUTE}/${errorStatus}`);
    }
    return null;
  }
};

const makeAuthRequest = async (  
  apiEndPoint,
  navigate,
  dynamicConfig = {}) => {
  try {
    const requestDetails = {
      baseURL: AUTH_BACKEND_URL,
      url: apiEndPoint.url,
      method: apiEndPoint.method,
      ...dynamicConfig,
    };
    const { data } = await axios(requestDetails);
    return data;
  } catch (error) {
    const errorStatus = error.response?.status;
    if (!errorStatus) {
      navigate(ERROR_ROUTE);
    } else {
      navigate(`${ERROR_ROUTE}/${errorStatus}`);
    }
    return null;
  }
};
export { makeRequest, makeAuthRequest };