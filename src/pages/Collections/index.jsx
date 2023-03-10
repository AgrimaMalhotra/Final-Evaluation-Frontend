import React from 'react';
import './Collections.css';
import { SideNavBar, Header,CollectionEntriesMain } from '../../components';

const CollectionPage = () => {
  return (
    <div className='collections-page-container'>
      <SideNavBar />
      <div className='collections-page-main'>
        <Header headerText='ContentType form db'/>
        <CollectionEntriesMain />
      </div>
    </div>
  );
};

export default CollectionPage;