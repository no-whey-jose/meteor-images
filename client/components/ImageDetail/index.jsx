import React from 'react';

const ImageDetail = ({ image }) => {
  return (
    <li className='media list-group-item'>
      <div className='media-left'>
        <img src={image.urls.full} alt={image.alt_description} />
      </div>
      <div className='media-body'>
        <h4 className='media-heading'>{image.alt_description}</h4>
      </div>
    </li>
  );
};

export default ImageDetail;
