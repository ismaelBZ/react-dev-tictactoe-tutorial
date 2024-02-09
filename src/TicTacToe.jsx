import './styles.css';
import { useState } from 'react';

const Square = ({ value, onSquareClick }) => {
  return (
    <button className="square" value={value} onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default function TicTacToe() {
  const [value, setValue] = useState(null);
  const [squares, setSquares] = useState(Array(9).fill('')); // ['', '', '', '', '', '', '', '', '']

  function handleClick(index) {
    const nextSquares = squares.slice(); // next squares = squares.values = ['', '', '', '', '', '', '', '', ''];
    // console.log('Next squares: ' + nextSquares);
    // console.log('Squares: ' + squares);
    nextSquares[index] = 'X';
    setSquares(nextSquares);

    /* Disable code above and enable below to see the difference */
    // nextSquares = squares; // next squares = squares.values = ['', '', '', '', '', '', '', '', ''];
    // nextSquares[0] = 'X';
    // console.log('Next squares: ' + nextSquares);
    // console.log('Squares: ' + squares);
  }

  return (
    <>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(0)} value={squares[0]} />
        <Square onSquareClick={() => handleClick(1)} value={squares[1]} />
        <Square onSquareClick={() => handleClick(2)} value={squares[2]} />
      </div>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(3)} value={squares[3]} />
        <Square onSquareClick={() => handleClick(4)} value={squares[4]} />
        <Square onSquareClick={() => handleClick(5)} value={squares[5]} />
      </div>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(6)} value={squares[6]} />
        <Square onSquareClick={() => handleClick(7)} value={squares[7]} />
        <Square onSquareClick={() => handleClick(8)} value={squares[8]} />
      </div>
    </>
  );
}
