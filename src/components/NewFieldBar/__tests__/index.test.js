import React from 'react';
import {render} from '@testing-library/react';
import NewFieldBar from '../index';

describe('NewFieldBar', () => {
  const mockFields = 
    {
      'id': 'number',
      'name': 'text',
    };
  it('should render correctly', () => {
    const component = render(<NewFieldBar fields={mockFields}/>);
    expect(component).toMatchSnapshot();
  });
});
