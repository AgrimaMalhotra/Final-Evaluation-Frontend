import * as React from 'react';
import './ContentTypeMain.css';
import searchIcon from '../../assets/icon-search-dark_2023-03-09/icon-search-dark.png';
import editIcon from '../../assets/user-pencil-write-ui-education_2023-03-09/user-pencil-write-ui-education.png';
import NewTypeBar from '../NewTypeBar';
import NewFieldBar from '../NewFieldBar';
import CentreModal from '../CentreModal';

const ContentTypeMain = () => {
  const [isClicked, setIsClicked] = React.useState(false);
  const [modalOptions, setModalOptions] = React.useState({});

  const showNewContentModal = () => {
    modalOptions.heading = 'Add New Content Type';
    modalOptions.inputHeading = 'Name of the content type';
    setModalOptions(modalOptions);
    setIsClicked(true);
  };
  const showNewFieldModal = () => {
    modalOptions.heading = 'Add New Field';
    modalOptions.inputHeading = 'Name of the field';
    modalOptions.typeHeading = 'Type of the field';
    setModalOptions(modalOptions);
    setIsClicked(true);
  };
  return (
    <div className="content-types-main">
      <div className='content-types-column'>
        <div className='column-header'>
          <p>7 Types</p>
          <img src={searchIcon} />
        </div>
        <button className='add-type-button' onClick={showNewContentModal}>+ New Type</button>
        <div className='type-list' >
          <NewTypeBar />
        </div>
      </div>

      <div className='content-fields-column'>
        <div className='content-fields-heading'>
          <p>Company_Profile</p>
          <img src={editIcon} />
        </div>
        <p className='fields-count'>13 fields</p>
        <button className='add-field-button' onClick={showNewFieldModal}>Add another field</button>
        <div className='fields-list'>
          <NewFieldBar />
        </div>
      </div>

      {isClicked &&  (
        <CentreModal
          setIsOpen={setIsClicked}
          modalOptions={modalOptions}
          setModalOptions={setModalOptions}
        />
      )}
    </div>
  );
};

export default ContentTypeMain;