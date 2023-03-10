import * as React from 'react';
import bgImg from '../../assets/undraw-upload-re-pasx_2023-03-09/undraw-upload-re-pasx.png';
import './CmsImage.css';

const CmsImage = () => {
  return (
    <div className='logo-image'>
      <p>Design APIs fast,</p>
      <p>Manage content easily</p>
      <img src={bgImg} />
    </div>
  );
};

export default CmsImage;
