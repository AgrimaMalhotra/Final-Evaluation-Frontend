import React from 'react';
import './SideNavBar.css';
import searchIcon from '../../assets/icon-search-dark_2023-03-09/icon-search-dark.png';

const SideNavBar = () => {
  return (
    <div className='sidebar'>
      <div className='header'>
        <p>CMS+</p>
      </div>
      <div className="collections">
        <div className="collections-header">
          <p>COLLECTION TYPES</p>
          <img src={searchIcon} />
        </div>
        <div className='collections-list'>
          <ul>
            <li>Articles</li>
            <li>Categories</li>
            <li>Tags</li>
            <li>Users</li>
            <li>Roles</li>
          </ul>
        </div>
        <div className="content-builder">
          <p>CONTENT TYPE BUILDER</p></div>
      </div>
    </div>
  );
};

export default SideNavBar;