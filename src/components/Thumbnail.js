import React, {useState, useEffect} from 'react';

const Thumbnail = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [thumbnails, setThumbnails] = useState([]);
  
    useEffect(() => {
      const importThumbnails = () => {
        const image = require.context('../Images/', false, /\.jpg$/);
        const thumbnails = image.keys().map(image);
        setThumbnails(thumbnails);
        setSelectedImage(thumbnails[0]);
      };
      importThumbnails();
    }, []);

    const handleThumbnailclick = (thumbnail) =>{
        setSelectedImage(thumbnail);
    }
  return (
    <>
    <div className="thumbnail-container">
        {thumbnails.map((thumbnail, index) => (
          <img style={{height:100, width:100, marginRight:10}}
            key={index}
            src={thumbnail}
            className={selectedImage === thumbnail ? 'active' : ''}
            onClick={() => handleThumbnailclick(thumbnail)}
          />
        ))}
      </div>
      
      
    </>
  )
}

export default Thumbnail;