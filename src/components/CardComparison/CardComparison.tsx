import React, { useContext } from 'react';
import myContext from '../context/myContext';

// interface
interface ICardComparison {
  setConfirmed: React.Dispatch<React.SetStateAction<boolean>>,
}

// função
function CardComparison(props: ICardComparison) {
  const { setConfirmed } = props;
  const { setPlayersTurn } = useContext(myContext);

  const handleClick = () => {
    setConfirmed((prev: boolean) => !prev)
    setPlayersTurn((prev: boolean) => !prev)
  };

  return (
    <>
      <p>Card Comparison</p>
      <button
        onClick={handleClick}
      >
        Back
      </button>
    </>
  )
}

export default CardComparison;
