import * as React from 'react';
import './ContentTypeMain.css';
import searchIcon from '../../assets/icon-search-dark_2023-03-09/icon-search-dark.png';
import editIcon from '../../assets/user-pencil-write-ui-education_2023-03-09/user-pencil-write-ui-education.png';
import NewTypeBar from '../NewTypeBar';
import NewFieldBar from '../NewFieldBar';
import CentreModal from '../CentreModal';
import propTypes from 'prop-types';

const ContentTypeMain = ({contentTypes}) => {
  const [isClicked, setIsClicked] = React.useState(false);
  const [modalOptions, setModalOptions] = React.useState({});
  const [selectedContent, setSelectedContent] = React.useState({
    id: '',
    name: '',
    fieldCount: 0,
    fields: {},
  });

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
          <p>{`${contentTypes.length} Types`} </p>
          <img src={searchIcon} />
        </div>
        <button className='add-type-button' onClick={showNewContentModal}>+ New Type</button>
        <div className='type-list' >
          {contentTypes.map((contentType) => (
            <div key={contentType.id} onClick={() => {setSelectedContent({id: contentType.id, name: contentType.name, fieldCount: Object.keys(contentType.fields).length, fields: contentType.fields});}}>
              <NewTypeBar key={contentType.id} contentType={contentType} isActive={selectedContent.id === contentType.id}/>
            </div>
          ))}
        </div>
      </div>
      <div className='content-fields-column'>
        <div className='content-fields-heading'>
          <p>{selectedContent.name}</p>
          <img src={editIcon} />
        </div>
        <p className='fields-count'>{`${selectedContent.fieldCount} types`}</p>
        <button className='add-field-button' onClick={showNewFieldModal}>Add another field</button>
        <div className='fields-list'>
          {selectedContent.fields && Object.keys(selectedContent.fields).map((key) => (
            <NewFieldBar key={key} fields={[key, selectedContent.fields[key]]} />
          ))}
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

ContentTypeMain.propTypes = {
  contentTypes: propTypes.array.isRequired,
};

export default ContentTypeMain;