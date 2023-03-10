import React from 'react';
import {render} from '@testing-library/react';
import Header from '../index';

describe('Header', () => {
  const mockHeaderText = 'text';
  it('should render correctly', () => {
    const component = render(<Header headerText={mockHeaderText} />);
    expect(component).toMatchSnapshot();
  });
});
