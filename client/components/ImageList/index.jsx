import React from 'react';
import ImageDetail from '../ImageDetail';

const IMAGES = [
  {
    title: 'Cigar',
    link: 'https://images.unsplash.com/photo-1612659429508-b429d6b07ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNpZ2FyfGVufDB8fDB8fHww&w=1000&q=80',
  },
  {
    title: 'Frying Pan',
    link: 'https://www.shutterstock.com/image-photo/black-iron-pan-isolated-on-260nw-1071952424.jpg',
  },
  {
    title: 'Guitar',
    link: 'https://www.stars-music.fr/medias/fender/player-tele-mex-mn-600-160398.jpg',
  },
];

const ImageList = () => {
  return (
    <ul>
      {IMAGES.map((image, index) => (
        <ImageDetail image={image} key={`index-${image.title}`} />
      ))}
    </ul>
  );
};

export default ImageList;
