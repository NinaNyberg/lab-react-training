import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLike] = useState(0);

  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const handleClick = () => {
    setLike(likes + 1);
  };

  const color = colors[likes % colors.length];

  //   const [color, changeColor] = useState(0);

  //   const colorSwitch = () => {
  //     if (color < colors.length) changeColor(color + 1);
  //   };

  return (
    <div>
      <button onClick={handleClick} style={{ backgroundColor: color }}>
        {likes} Like{likes !== 1 ? 's' : ''}
      </button>
    </div>
  );
};

export default LikeButton;
