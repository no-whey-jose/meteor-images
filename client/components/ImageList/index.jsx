import React from 'react';
import ImageDetail from '../ImageDetail';

const ImageList = ({ images }) => {
  return (
    <ul className='media-list list-group'>
      {images.map((image) => (
        <ImageDetail image={image} key={image.id} />
      ))}
    </ul>
  );
};

export default ImageList;
