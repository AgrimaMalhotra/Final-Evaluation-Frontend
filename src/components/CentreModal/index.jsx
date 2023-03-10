import * as React from 'react';
import './CentreModal.css';
import PropTypes from 'prop-types';
import { ADD_CONTENT_TYPE } from '../../constants/apiEndPoints';
import { useNavigate } from 'react-router-dom';
import {makeRequest} from '../../utils/makeRequest/makeRequest';

const CentreModal = ({ setIsOpen })=> {
  const [addType, setAddType] = React.useState('');
  const navigate = useNavigate();
  const handleClick = async() => {
    const token = localStorage.getItem('auth_token');
    await makeRequest(ADD_CONTENT_TYPE(),navigate,token,{data: {'name':addType}} );
    setIsOpen(false); };


  return (
    <div>
      <div className="dark-bg" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div
          className='modal'
        >
          <div className="modal-header">
            <h5 className="heading">Create a new content type</h5>
          </div>
          <div className="modal-content">Name of the Content Type</div>
          <input
            type="text"
            className="modal-input"
            value={addType}
            onChange={(e) => setAddType(e.target.value)}
          />
          <div className="actions">
            <div className="actions-container">
              <button
                className="cancel-button"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Cancel
              </button>
              <button
                className="create-button"
                onClick={handleClick}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CentreModal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default CentreModal;