import './numbersTableStyle.css';

const NumbersTable = ({ limit }) => {
  const newArr = Array.apply(null, { length: limit + 1 })
    .map(Number.call, Number)
    .slice(1);
  console.log(newArr);

  //   const red = {
  //     backgroundColor: 'red',
  //   };
  //   const white = {
  //     backgroundColor: 'white',
  //   };

  const styleNum = newArr.map((num) => num % 2 === 0);

  return (
    <div
      className="numbersTable"
      style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
    >
      {newArr.map((num, index) => (
        <div className={num % 2 === 0 ? 'red' : 'white'} key={index}>
          {num}
        </div>
      ))}
    </div>
  );
};

export default NumbersTable;
