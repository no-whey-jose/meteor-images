import React from 'react';
import ImageDetail from '../ImageDetail';

const IMAGES = [
  {
    title: 'Focaccia',
    link: 'https://theglutenfreeaustrian.com/wp-content/uploads/2021/11/nokneadfocaccia10-720x720.jpg',
  },
  {
    title: 'Jam',
    link: 'https://media.istockphoto.com/id/610751534/photo/jar-of-wild-berry-jam.jpg?s=612x612&w=0&k=20&c=hpL8sN_2mJJ7JlyU6R7uGDkPB8PD4uxRCaIupvE1MK4=',
  },
  {
    title: 'Sourdough',
    link: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/is-sourdough-bread-gluten-free-1296x728-feature.jpg?w=1155&h=1528',
  },
];

const ImageList = () => {
  return (
    <ul className='media-list list-group'>
      {IMAGES.map((image, index) => (
        <ImageDetail image={image} key={`index-${image.title}`} />
      ))}
    </ul>
  );
};

export default ImageList;
