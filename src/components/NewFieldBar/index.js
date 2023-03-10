import * as React from 'react';
import './NewFieldBar.css';
import editIcon from '../../assets/user-edit-text-message-note_2023-03-09/user-edit-text-message-note.png';
import deleteIcon from '../../assets/trash-delete-recycle-bin-bucket-waste_2023-03-09/trash-delete-recycle-bin-bucket-waste.png';
import propTypes from 'prop-types';

const NewFieldBar = ( {fields}) => {
  const icon={
    'text': 'Ab',
    'string': 'Ab',
    'number': '123',
    'date': 'D',
  };
  return (
    <div className="new-field-bar">
      <div className='field-type-logo'>
        <p>{icon[fields[1]]}</p>
      </div>
      <p className='field-name'>{fields[0]}</p>
      <p className='field-type-text'>{fields[1]}</p>
      <div className='action-buttons'>
        <img src={editIcon}></img>
        <img src={deleteIcon}></img>
      </div>

    </div>
  );
};

NewFieldBar.propTypes = {
  fields: propTypes.array.isRequired,
};
export default NewFieldBar;