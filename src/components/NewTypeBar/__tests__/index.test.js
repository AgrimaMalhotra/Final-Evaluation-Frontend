import React from 'react';
import {render} from '@testing-library/react';
import NewTypeBar from '../index';

describe('NewTypeBar', () => {
  const mockContentType = {
    'id': 1,
    'name': 'contentTypeName',
    'fields': {
      'id': 1,
      'name':'abc'}
  };
  it('should render correctly', () => {
    const component = render(<NewTypeBar contentType={mockContentType} isActive={false}/>);
    expect(component).toMatchSnapshot();
  });
});
