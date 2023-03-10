import React from 'react';
import {render} from '@testing-library/react';
import CentreModal from '../index';

jest.mock('react-router-dom', () => ({ useNavigate: () => jest.fn() }));
describe('CentreModal', () => {
  it('should render correctly', () => {
    const component = render(<CentreModal setIsOpen={jest.fn()} />);
    expect(component).toMatchSnapshot();
  });
});
