import React from 'react';
import './Collections.css';
import { SideNavBar, Header,CollectionEntriesMain } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import { makeRequest } from '../../utils/makeRequest/makeRequest';
import { GET_COLLECTION_NAMES,GET_COLLECTION_FIELDS_BY_ID } from '../../constants/apiEndPoints';

const CollectionPage = () => {
  const {collectionId} = useParams();
  const navigate = useNavigate();
  const [collectionNames, setCollectionNames] = React.useState([]);
  const [collectionFields, setCollectionFields] = React.useState([]);
  
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('auth_token');
        const [collectionNameResponse, collectionFieldsResponse] = await Promise.all([
          makeRequest(GET_COLLECTION_NAMES(),navigate,token ),
          makeRequest(GET_COLLECTION_FIELDS_BY_ID(collectionId),navigate,token)
        ]);
        
        setCollectionNames(collectionNameResponse.data);
        setCollectionFields(collectionFieldsResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  },[collectionId, navigate]);
  return (
    collectionNames.length === 0 ? <div>Loading...</div> :
      collectionFields.length === 0 ? <div>Loading...</div> :
        (
          <div className='collections-page-container'>
            <SideNavBar collectionNames={collectionNames} />
            <div className='collections-page-main'>
              <Header headerText={collectionNames[collectionId-1]?.name}/>
              <CollectionEntriesMain collectionFields={collectionFields}/>
            </div>
          </div>)
  );
};


export default CollectionPage;