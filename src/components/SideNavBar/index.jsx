import * as React from 'react';
import './SideNavBar.css';
import searchIcon from '../../assets/icon-search-dark_2023-03-09/icon-search-dark.png';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {  DASHBOARD_ROUTE } from '../../constants/routes';

const SideNavBar = ({collectionNames}) => { 
  const navigate =  useNavigate();

  return (
    <div className='sidebar'>
      <div className='header'>
        <p>CMS+</p>
      </div>
      <div className="collections-nav-bar">
        <div className="collections-header">
          <p>COLLECTION TYPES</p>
          <img src={searchIcon}/>
        </div>
        <div className='collections-list'>
          <ul>
            {collectionNames.map((collectionName) => (
              <li key={collectionName.id} onClick={() => 
                navigate(`/collections/${collectionName.id}`) }>{collectionName.name}</li>)
            )}
          </ul>
        </div>
        <div className="content-builder" onClick={() => 
          navigate(DASHBOARD_ROUTE)}>
          <p>CONTENT TYPE BUILDER</p></div>
      </div>
    </div>
  );
};

SideNavBar.propTypes = {
  collectionNames: propTypes.array.isRequired,
};

export default SideNavBar;