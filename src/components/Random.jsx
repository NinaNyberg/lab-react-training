const Random = ({ min, max }) => {
  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div>
      <p>
        Random value between {min} and {max} =&gt; {randomNum(min, max)}
      </p>
    </div>
  );
};

export default Random;
