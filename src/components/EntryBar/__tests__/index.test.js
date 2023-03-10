import React from 'react';
import {render} from '@testing-library/react';
import EntryBar from '../index';

describe('EntryBar', () => {
  const mockEntryValue = {
    'id': 1,
    'name': 'entryName',
  };
  it('should render correctly', () => {
    const component = render(<EntryBar entryValue ={mockEntryValue} />);
    expect(component).toMatchSnapshot();
  });
});
