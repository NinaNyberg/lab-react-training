import React, { useState } from 'react';
// import img from './assets/images/maxence.png';
// import imgClicked from './assets/images/maxence-glasses.png';

const ClickablePicture = ({ img, imgClicked }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const imageSource = clicked ? imgClicked : img;
  return (
    <div>
      <img src={imageSource} alt="Maxence" onClick={handleClick} />
    </div>
  );
};

export default ClickablePicture;
