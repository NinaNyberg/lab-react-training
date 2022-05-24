import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLike] = useState(0);

  return (
    <div>
      <button onClick={() => setLike(likes + 1)}>{likes} Likes</button>
    </div>
  );
};

export default LikeButton;
