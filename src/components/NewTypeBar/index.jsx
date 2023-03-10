import * as React from 'react';
import './NewTypeBar.css';
import propTypes from 'prop-types';

const NewTypeBar = ({contentType, isActive}) => {

  return ( 
    <div className={`content-type-bar ${isActive? 'content-type-bar-onClick': ''}`}>
      <p>{contentType.name}</p>
      <p>{Object.keys(contentType.fields).length}</p>
    </div>
  );
};

NewTypeBar.propTypes = {
  contentType: propTypes.object.isRequired,
  isActive: propTypes.bool.isRequired,
};

export default NewTypeBar;