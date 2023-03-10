import React from 'react';
import {render} from '@testing-library/react';
import ContentTypeMain from '../index';

describe('ContentTypeName', () => {
  const mockContentTypes = [{
    'id': 1,
    'name': 'contentTypeName',
    'fields': {
      'id': 1,
      'name':'abc'}
  }];

  it('should render correctly', () => {
    const component = render(<ContentTypeMain contentTypes={mockContentTypes}/>);
    expect(component).toMatchSnapshot();
  });
});
