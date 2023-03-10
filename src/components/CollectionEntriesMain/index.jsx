import * as React from 'react';
import EntryBar from '../EntryBar';
import './CollectionEntriesMain.css';
import SideModal from '../SideModal';

const CollectionEntriesMain = () => {
  const [isClicked, setIsClicked] = React.useState(false);
  return (
    <div className="collection-entries">
      <div className='collection-entries-header'>
        <p className='collection-entry-count'>13 Entries Found</p>
        <p className='collection-add-entry' onClick={() => setIsClicked(true)}>Add a new entry</p>
      </div>
      <div className='collection-entries-list'>
        <div className='entry-keys-heading'>
          <p className='key-1'>ID</p>
          <p className='key-2'>Name</p>
          <p className='key-3'>Website</p>
          <p className='key-4'>Contact</p>
          <p className='actions-allowed'>Actions</p>
        </div>
        <EntryBar />
      </div>
      {isClicked && <SideModal setIsOpen={setIsClicked} />}
    </div>
  );
};

export default CollectionEntriesMain;