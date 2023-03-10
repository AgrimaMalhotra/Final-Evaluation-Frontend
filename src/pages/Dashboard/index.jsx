import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, SideNavBar,ContentTypeMain } from '../../components';
import './Dashboard.css';
import { makeRequest } from '../../utils/makeRequest/makeRequest';
import { GET_COLLECTION_NAMES ,GET_CONTENT_TYPES} from '../../constants/apiEndPoints';

const Dashboard = () => {
  const navigate = useNavigate();
  const [collectionNames, setCollectionNames] = React.useState([]);
  const [contentTypes, setContentTypes] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('auth_token');
        const [collectionNameResponse, contentTypes] = await Promise.all([
          makeRequest(GET_COLLECTION_NAMES(),navigate,token ),
          makeRequest(GET_CONTENT_TYPES(),navigate,token),
        ]);
      
        setCollectionNames(collectionNameResponse.data);
        setContentTypes(contentTypes.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [navigate]);

  return (
    collectionNames.length === 0 ? <div>Loading...</div> :
      contentTypes.length === 0 ? <div>Loading...</div> :
        (<div className="dashboard">
          <SideNavBar collectionNames={collectionNames}/>
          <div className = "dashboard-main">
            <Header headerText='Content Types'/>
            <ContentTypeMain contentTypes={contentTypes}/>
          </div>
        </div>)
  );
};
export default Dashboard;