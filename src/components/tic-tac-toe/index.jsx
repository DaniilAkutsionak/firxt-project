import { useEffect, useState } from "react";
import "./style.css";

function Square({ value, onClick }) {
    return (
        <button onClick={onClick} className="square">
            {value}
        </button>
    );
}

export default function TicTacToe() {
    const [squares, setSquares] = useState(Array(9).fill(""));
    const [isXTurn, setXTurn] = useState(true);
    const [status, setStatus] = useState('')

    function handleClick(getCurrentSquare) {
        let cpySquares = [...squares];
        if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
        cpySquares[getCurrentSquare] = isXTurn ? 'X' : 'O';
        setXTurn(!isXTurn);
        setSquares(cpySquares);
    }

    useEffect(() => {
        if (!getWinner(squares) && squares.every((item) => item !== '')) {
            setStatus(`There is no winner. Restart`)
        } else if (getWinner(squares)) {
            setStatus(`Winner is ${getWinner(squares)}`)
        } else {
            setStatus(`Next player is ${isXTurn ? 'X' : 'O'}`)
        }
    },[squares, isXTurn]);

    function handleRestart() {
        setXTurn(true);
        setSquares(Array(9).fill(""));
      }

    function getWinner(squares) {
        const winningPatterns = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [2,5,8],
            [0,4,8],
            [2,4,6],
            [0,3,6],
            [1,4,7],
        ];

        const x = 5
        const y = 2
        const z = x % y

        for (let i = 0; i < winningPatterns.length; i++) {
            const [x,y,z] = winningPatterns[i];

            if (
                squares[x] &&
                squares[x] === squares[y] &&
                squares[x] === squares[z]
            ) {
                return squares[x];
            }

        }

        return null;
    }

    return (
        <div className="tic-tac-toe-container">
            <div className="row">
                <Square value={squares[0]} onClick={() => handleClick(0)}></Square>
                <Square value={squares[1]} onClick={() => handleClick(1)}></Square>
                <Square value={squares[2]} onClick={() => handleClick(2)}></Square>
            </div>
            <div className="row">
                <Square value={squares[3]} onClick={() => handleClick(3)}></Square>
                <Square value={squares[4]} onClick={() => handleClick(4)}></Square>
                <Square value={squares[5]} onClick={() => handleClick(5)}></Square>
            </div>
            <div className="row">
                <Square value={squares[6]} onClick={() => handleClick(6)}></Square>
                <Square value={squares[7]} onClick={() => handleClick(7)}></Square>
                <Square value={squares[8]} onClick={() => handleClick(8)}></Square>
            </div>
            <h1>{status}</h1>
            <button onClick={handleRestart}>Restart</button>
        </div>
    );
}
