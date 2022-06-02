import { useState } from 'react';
import dice from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

// const randomDiceFind = () => Math.floor(Math.random() * 6);
const emptydice = dice;

const Dice = () => {
  const randomDiceFind = () => {
    const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6];
    const randNum = Math.floor(Math.random() * diceArr.length);
    return diceArr[randNum];
  };

  const [randomDice, setRandomDice] = useState(randomDiceFind());

  const handleClick = () => {
    setRandomDice(emptydice);
    setTimeout(() => {
      setRandomDice(randomDiceFind());
    }, 1000);
  };

  //   const diceImg = diceArr[randomDice];

  //   || dice;

  return (
    <div>
      <img
        src={randomDice}
        alt="dice-pic"
        onClick={handleClick}
        style={{ width: '100px' }}
      />
    </div>
  );
};

export default Dice;
