const IdCard = (props) => {
  return (
    <div className="IdCard">
      <img src={props.picture} alt="user-pic" />
      <p>
        <b>First name:</b>
        {props.firstName}
      </p>
      <p>
        <b>Last name:</b>
        {props.lastName}
      </p>
      <p>
        <b>Gender:</b>
        {props.gender}
      </p>
      <p>
        <b>Height:</b>
        {props.height}
      </p>
      <p>
        <b>Birth:</b>
        {props.birth.toLocaleDateString()}
      </p>
    </div>
  );
};

export default IdCard;
