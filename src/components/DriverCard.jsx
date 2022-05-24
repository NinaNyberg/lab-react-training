const DriverCard = (props) => {
  let score = Math.round(props.rating);

  let points;
  switch (score) {
    case 0:
      points = '☆☆☆☆☆';
      break;
    case 1:
      points = '★☆☆☆☆';
      break;
    case 2:
      points = '★★☆☆☆';
      break;
    case 3:
      points = '★★★☆☆';
      break;
    case 4:
      points = '★★★★☆';
      break;
    case 5:
      points = '★★★★★';
      break;
  }

  return (
    <div
      className="DriverCard"
      style={{
        width: '30%',
        borderRadius: '0.7em',
        backgroundColor: 'blueviolet',
      }}
    >
      <img
        src={props.img}
        alt="driver-pic"
        style={{ width: '8%', borderRadius: '60%' }}
      />
      {props.name} <br />
      {points} <br />
      {props.car.model} - {props.car.licensePlate}
    </div>
  );
};

export default DriverCard;
