import React from 'react';
import {render} from '@testing-library/react';
import SideModal from '../index';

jest.mock('react-router-dom', () => ({ useNavigate: () => jest.fn() }));
describe('SideModal', () => {
  const mockInputOptions = ['name','id'];
  const mockCollectionDetails = {
    'id': 1,
    'name': 'collectionName',
  };
  

  it('should render correctly', () => {
    const component = render(<SideModal setIsOpen={false} inputOptions={mockInputOptions} collectionDetails={mockCollectionDetails}/>);
    expect(component).toMatchSnapshot();
  });
});
