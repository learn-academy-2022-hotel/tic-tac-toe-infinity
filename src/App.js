import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  
  // grid
  const [squares, setSquares] = useState(Array(9).fill("🤪"))
  // first player
  const [opponent, setOpponent] = useState("❎")
  // winning message
  const [winner, setWinner] = useState("")
  const playerWon = () => {
    const winning = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < winning.length; i++) {
      const [a, b, c] = winning[i]
      if (squares[a] === "❎" && squares[a] === squares[b] && squares[a] === squares[c]) {
        setWinner("❎")
      } else if (squares[a] === "🅾️" && squares[a] === squares[b] && squares[a] === squares[c]) {
        setWinner("🅾️")
      }
    }
    return null
  }
  const switchOpponent = (player) => {
    // conditional to prevent multiple entries on same box
    if(squares[player] === "🤪") {
      // second player
      setOpponent(opponent === "❎" ? "🅾️" : "❎")
      const updateSquare = [...squares]
      updateSquare[player] = opponent
      setSquares(updateSquare)
    }
    playerWon()
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      {winner && <h2>{winner} wins!</h2>}
      <div className="grid">
        {squares.map((value, index) => 
          <div key={index}>
            <Square 
              winner={winner}
              index={index} 
              value={value}
              switchOpponent={switchOpponent}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default App