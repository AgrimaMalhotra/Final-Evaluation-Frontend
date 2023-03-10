import React from 'react';
import {render} from '@testing-library/react';
import LoginForm from '../index';
jest.mock('react-router-dom', () => ({ useNavigate: () => jest.fn() }));
describe('LoginForm', () => {
  it('should render correctly', () => {
    const component = render(<LoginForm />);
    expect(component).toMatchSnapshot();
  });
});
