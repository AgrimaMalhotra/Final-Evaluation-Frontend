import * as React from 'react';
import './EntryBar.css';
import editIcon from '../../assets/user-edit-text-message-note_2023-03-09/user-edit-text-message-note.png';
import deleteIcon from '../../assets/trash-delete-recycle-bin-bucket-waste_2023-03-09/trash-delete-recycle-bin-bucket-waste.png';

const EntryBar = () => {
  return (
    <div >
      <div className='entry'>
        <p className='column-1'>1</p>
        <p className='column-2'>Name</p>
        <p className='column-3'>Text</p>
        <p className='column-4'>Text</p>
        <div className='action-icons'>
          <img src={editIcon}></img>
          <img src={deleteIcon}></img>
        </div>
      </div>
    </div>
  );
};

export default EntryBar;