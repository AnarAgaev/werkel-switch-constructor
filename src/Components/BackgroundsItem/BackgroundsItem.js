import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const BackgroundsItem = ({item, handleClick}) => {

  const [imgLoaded, setImgLoaded] = useState(false);
  
  const {active, image, preview} = item;

  const clazz = active
    ? 'constructor__item active'
    : 'constructor__item';

  return(
    <div className={clazz} onClick={handleClick}>
      <p className={ imgLoaded ? 'loaded' : '' }>
        <LazyLoadImage
          src={preview}
          afterLoad={() => setImgLoaded(true)}
          alt="" />
        <LazyLoadImage
          className='invisible'
          src={image}
          alt="" />
      </p>
    </div>
  );
}

export default BackgroundsItem;