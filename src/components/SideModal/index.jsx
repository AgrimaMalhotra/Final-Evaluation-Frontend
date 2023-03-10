import * as React from 'react';
import './SideModal.css';
import PropTypes from 'prop-types';
import { ADD_COLLECTION_ENTRY_BY_ID } from '../../constants/apiEndPoints';
import { useNavigate } from 'react-router-dom';
import {makeRequest} from '../../utils/makeRequest/makeRequest';

export default function SideModal({ setIsOpen ,inputOptions, collectionDetails}) {
  const [addType, setAddType] = React.useState({});
  const navigate = useNavigate();
  const handleClick = async() => {
    const token = localStorage.getItem('auth_token');
    console.log(collectionDetails);
    await makeRequest(ADD_COLLECTION_ENTRY_BY_ID(collectionDetails.id),navigate,token,{data: {...addType}} );
    setIsOpen(false); };

  return (
    <div>
      <div className="dark-bg" onClick={() => setIsOpen(false)} />
      <div className="right-modal">
        <div className="side-modal">
          <div className="modal-header">
            <h5 className='heading'>{`New ${collectionDetails.name}`}</h5>
          </div>
          <div >
            {inputOptions.map((inputOption,idx) => (
              <div key={idx}>
                <p className="modal-content" >{inputOption}</p>
                <input type="text" className="modal-input" onChange={(e) => setAddType({...addType, inputOption:e.target.value})}/>
              </div>
            ))}
          </div>
          <div className="modal-actions-side">
            <div className="actions-container-side-modal">
              <button className="cancel-button" onClick={handleClick}>Cancel</button>
              <button className="create-button" onClick={handleClick}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SideModal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  inputOptions: PropTypes.array.isRequired,
  collectionDetails: PropTypes.object.isRequired,
};