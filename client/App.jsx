import React, { useEffect, useState } from 'react';
import { useAsync } from 'react-async';
import ImageList from './components/ImageList';
import { getPhotosByQuery } from './api/unsplash';

function App() {
  const { data } = useAsync({ promiseFn: getPhotosByQuery, query: 'food' });
  const [images, setImages] = useState([]);
  useEffect(() => {
    if (data && data.results) setImages(data.results);
  }, [data]);

  return (
    <>
      <ImageList images={images} />
    </>
  );
}

export default App;
