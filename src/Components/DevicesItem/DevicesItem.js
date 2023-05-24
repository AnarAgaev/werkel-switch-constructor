import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const DevicesItem = ({item, handleClick}) => {

  const [imgLoaded, setImgLoaded] = useState(false);

  const {active, name, image, preview, collection } = item;

  const clazz = active
    ? 'constructor__item active'
    : 'constructor__item';

  return(
    <div className={clazz} onClick={handleClick}>
      <p className={ imgLoaded ? 'loaded' : ''}>
        <LazyLoadImage 
          src={preview} 
          afterLoad={() => setImgLoaded(true)}
          alt="" />
        <LazyLoadImage
          className='invisible'
          src={image}
          alt="" />
      </p>
      <h4>
        {collection ? <b>{collection}</b> : null} 
        <span>{name}</span>
      </h4>
    </div>
  );
}

export default DevicesItem;
