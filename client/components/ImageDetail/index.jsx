import React from 'react';

const ImageDetail = ({ image }) => {
  return (
    <li className='media list-group-item'>
      <div className='media-left'>
        <img src={image.link} alt={image.title} />
      </div>
      <div className='media-heading'>
        <div className='media-heading'>{image.title}</div>
      </div>
    </li>
  );
};

export default ImageDetail;
