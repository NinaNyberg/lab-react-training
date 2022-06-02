import Visa from '../assets/images/visa.png';
import masterCard from '../assets/images/master-card.svg';

const CreditCard = (props) => {
  const { color, bgColor, number, type } = props;

  const divStyle = {
    color: color,
    backgroundColor: bgColor,
    borderRadius: '0.5em',
    width: '30%',
  };

  let logo;

  if (type === 'Visa') {
    logo = Visa;
  } else {
    logo = masterCard;
  }

  const cardHide = (num) => {
    let hideNum = [];
    for (let i = 0; i < num.length; i++) {
      if (i < num.length - 4) {
        hideNum.push('\u25CF');
      } else {
        hideNum.push(num[i]);
      }
    }
    return hideNum.join('');
  };

  const formattedExpMonth =
    props.expirationMonth < 10
      ? `0${props.expirationMonth}`
      : `${props.expirationMonth}`;

  return (
    <div className="CreditCard" style={divStyle}>
      <img src={logo} alt="logo" style={{ width: '5%' }} /> <br />
      {cardHide(number)} <br />
      <span style={{ marginRight: '1em' }}>
        Expires: {formattedExpMonth}/{props.expirationYear - 2000}
      </span>
      {props.bank} <br />
      {props.owner}
    </div>
  );
};

export default CreditCard;
