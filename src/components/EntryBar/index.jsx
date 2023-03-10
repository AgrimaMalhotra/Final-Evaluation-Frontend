import * as React from 'react';
import './EntryBar.css';
import editIcon from '../../assets/user-edit-text-message-note_2023-03-09/user-edit-text-message-note.png';
import deleteIcon from '../../assets/trash-delete-recycle-bin-bucket-waste_2023-03-09/trash-delete-recycle-bin-bucket-waste.png';
import propTypes from 'prop-types';

const EntryBar = ({entryValue}) => {
  return (
    <div >
      <div className='entry'>
        {Object.keys(entryValue).map((key, idx) => {
          if (idx <= 3) {
            return <p key={idx} className={`column-${idx}`}>{entryValue[key]}</p>;
          }
        })}

        <div className='action-icons'>
          <img src={editIcon}></img>
          <img src={deleteIcon}></img>
        </div>
      </div>
    </div>
  );
};

EntryBar.propTypes = {
  entryValue: propTypes.object.isRequired,
};

export default EntryBar;