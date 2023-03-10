import axios from 'axios';
import { makeRequest, makeAuthRequest } from './../makeRequest';
import { BACKEND_URL, AUTH_BACKEND_URL } from '../../../constants/apiEndPoints.js';
import { ERROR_ROUTE } from '../../../constants/routes';

jest.mock('axios');

describe('makeRequest', () => {
  const token = 'test-token';

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return data on successful request', async () => {
    const apiEndPoint = {
      url: '/test-url',
      method: 'get',
    };
    const data = { test: 'data' };
    const expectedRequestDetails = {
      baseURL: BACKEND_URL,
      url: apiEndPoint.url,
      method: apiEndPoint.method,
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    axios.mockResolvedValueOnce({ data });

    const result = await makeRequest(apiEndPoint, jest.fn(), token);

    expect(axios).toHaveBeenCalledWith(expectedRequestDetails);
    expect(result).toEqual(data);
  });

  it('should call navigate with error route on network error', async () => {
    const apiEndPoint = {
      url: '/test-url',
      method: 'get',
    };
    const navigate = jest.fn();
    const error = { response: null };
    axios.mockRejectedValueOnce(error);

    const result = await makeRequest(apiEndPoint, navigate, token);

    expect(navigate).toHaveBeenCalledWith(ERROR_ROUTE);
    expect(result).toBeNull();
  });

  it('should call navigate with error route and status on request error', async () => {
    const apiEndPoint = {
      url: '/test-url',
      method: 'get',
    };
    const navigate = jest.fn();
    const error = { response: { status: 404 } };
    axios.mockRejectedValueOnce(error);

    const result = await makeRequest(apiEndPoint, navigate, token);

    expect(navigate).toHaveBeenCalledWith(`${ERROR_ROUTE}/${error.response.status}`);
    expect(result).toBeNull();
  });
});

describe('makeAuthRequest', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return data on successful request', async () => {
    const apiEndPoint = {
      url: '/test-url',
      method: 'get',
    };
    const data = { test: 'data' };
    const expectedRequestDetails = {
      baseURL: AUTH_BACKEND_URL,
      url: apiEndPoint.url,
      method: apiEndPoint.method,
    };
    axios.mockResolvedValueOnce({ data });

    const result = await makeAuthRequest(apiEndPoint, jest.fn());

    expect(axios).toHaveBeenCalledWith(expectedRequestDetails);
    expect(result).toEqual(data);
  });

  it('should call navigate with error route on network error', async () => {
    const apiEndPoint = {
      url: '/test-url',
      method: 'get',
    };
    const navigate = jest.fn();
    const error = { response: null };
    axios.mockRejectedValueOnce(error);

    const result = await makeAuthRequest(apiEndPoint, navigate);

    expect(navigate).toHaveBeenCalledWith(ERROR_ROUTE);
    expect(result).toBeNull();
  });

  it('should call navigate with error route and status on request error', async () => {
    const apiEndPoint = {
      url: '/test-url',
      method: 'get',
    };
    const navigate = jest.fn();
    const error = { response: { status: 404 } };
    axios.mockRejectedValueOnce(error);

    const result = await makeAuthRequest(apiEndPoint, navigate);

    expect(navigate).toHaveBeenCalledWith(`${ERROR_ROUTE}/${error.response.status}`);
    expect(result).toBeNull();
  });
});
