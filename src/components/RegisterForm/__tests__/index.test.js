import React from 'react';
import {render} from '@testing-library/react';
import RegisterForm from '../index';

jest.mock('react-router-dom', () => ({ useNavigate: () => jest.fn() }));
describe('RegisterForm', () => {
  it('should render correctly', () => {
    const component = render(<RegisterForm />);
    expect(component).toMatchSnapshot();
  });
});
