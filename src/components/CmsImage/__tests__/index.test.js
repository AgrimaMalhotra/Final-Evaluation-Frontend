import React from 'react';
import {render} from '@testing-library/react';
import CmsImage from '../index';

describe('CmsImage', () => {
  it('should render correctly', () => {
    const component = render(<CmsImage />);
    expect(component).toMatchSnapshot();
  });
});
