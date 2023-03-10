import React from 'react';
import {render} from '@testing-library/react';
import CollectionEntriesMain from '../index';

describe('CollectionEntriesMain', () => {
  const mockCollectionField = [{
    'id': 1,
    'entry':{
      'name': 'collectionField',
      'type': 'collection',
    }
  }];
  const mockContentName = 'contentName';

  it('should render correctly', () => {
    const component = render(<CollectionEntriesMain collectionFields={mockCollectionField} contentName={mockContentName}/>);
    expect(component).toMatchSnapshot();
  });
});
