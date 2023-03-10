import React from 'react';
import { Header, SideNavBar,ContentTypeMain } from '../../components';
import './Dashboard.css';
const Dashboard = () => {
  return (
    <div className="dashboard">
      <SideNavBar />
      <div className = "dashboard-main">
        <Header headerText='Content Types'/>
        <ContentTypeMain />
      </div>
    </div>
  );
};
export default Dashboard;