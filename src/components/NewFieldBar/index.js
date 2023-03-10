import * as React from 'react';
import './NewFieldBar.css';
import editIcon from '../../assets/user-edit-text-message-note_2023-03-09/user-edit-text-message-note.png';
import deleteIcon from '../../assets/trash-delete-recycle-bin-bucket-waste_2023-03-09/trash-delete-recycle-bin-bucket-waste.png';

const NewFieldBar = () => {
  return (
    <div className="new-field-bar">
      <div className='field-type-logo'>
        <p>Ab</p>
      </div>
      <p className='field-name'>Name</p>
      <p className='field-type-text'>Text</p>
      <div className='action-buttons'>
        <img src={editIcon}></img>
        <img src={deleteIcon}></img>
      </div>

    </div>
  );
};

export default NewFieldBar;