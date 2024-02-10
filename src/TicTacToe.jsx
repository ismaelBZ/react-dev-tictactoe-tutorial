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
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [xIsNext, setXIsNext] = useState(true);
  function handleClick(index) {
    if (squares[index] || calculateWinner(squares)) {
      return;
    } else if (!squares[index]) {
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[index] = 'X';
      } else if (!xIsNext) {
        nextSquares[index] = 'O';
      }
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
    }
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O' )
  }

  return (
    <>
      <div className="status">{status}</div>
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

function calculateWinner(squares) {
  const winPossibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winPossibilities.length; i++) {
    const [a, b, c] = winPossibilities[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    } 
  }
  return null;
}
