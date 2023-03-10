import React from 'react';
import {render} from '@testing-library/react';
import SideNavBar from '../index';

jest.mock('react-router-dom', () => ({ useNavigate: () => jest.fn() }));
describe('SideNavBar', () => {
  const mockCollectionNames = ['collection1','collection2','collection3'];
  it('should render correctly', () => {
    const component = render(<SideNavBar collectionNames={mockCollectionNames}/>);
    expect(component).toMatchSnapshot();
  });
});
