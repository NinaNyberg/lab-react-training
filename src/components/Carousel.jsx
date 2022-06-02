import { useState } from 'react';

const Carousel = ({ images }) => {
  const [img, setImg] = useState(0);

  const handleLeftClick = () =>
    img > 0 ? setImg(img - 1) : setImg(images.length - 1);

  const handleRightClick = () =>
    img < images.length - 1 ? setImg(img + 1) : setImg(0);

  return (
    <div>
      <img src={images[img]} alt="pic" />
      <div>
        <button onClick={handleLeftClick}>Left</button>
        <button onClick={handleRightClick}>Right</button>
      </div>
    </div>
  );
};

export default Carousel;
