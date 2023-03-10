import * as React from 'react';
import {EntryBar,SideModal} from '..';
import './CollectionEntriesMain.css';
import propTypes from 'prop-types';

const CollectionEntriesMain = ({collectionFields, contentName}) => {
  const [isClicked, setIsClicked] = React.useState(false);
  return (
    <div className="collection-entries">
      <div className='collection-entries-header'>
        <p className='collection-entry-count'> {`${collectionFields.length} Entries Found`}</p>
        <p className='collection-add-entry' onClick={() => setIsClicked(true)}>Add a new entry</p>
      </div>
      <div className='collection-entries-list'>
        <div className='entry-keys-heading'>
          {Object.keys(collectionFields[0].entry).map((key,idx) => {
            if (idx<=3)
            {return (<p key={idx} className={`key-${idx}`}>{key}</p>);}
          })}
          <p className='actions-allowed'>Actions</p>
        </div>
        <div className='entry-values'>
          {collectionFields.map((collectionField) => (
            <EntryBar key={collectionField.id} entryValue={collectionField.entry} />
          ))}
        </div>
      </div>
      {isClicked && <SideModal setIsOpen={setIsClicked}  inputOptions={Object.keys(collectionFields[0].entry)} collectionDetails={{'id':collectionFields[0].id, 'name':contentName}}/>}
    </div>
  );
};

CollectionEntriesMain.propTypes = {
  collectionFields: propTypes.array.isRequired,
  contentName: propTypes.string.isRequired,
};

export default CollectionEntriesMain;