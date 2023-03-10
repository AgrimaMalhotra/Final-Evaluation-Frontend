import * as React from 'react';
import './Header.css';
import propTypes from 'prop-types';

const Header = ({headerText})=> {
  return <div className="main-header">{headerText}</div>;
};

Header.propTypes = {
  headerText: propTypes.string.isRequired,
};

export default Header;