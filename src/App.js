import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  // grid
  const [squares, setSquares] = useState(Array(9).fill(null))
  // first player
  const [opponent, setOpponent] = useState("❎")
  const switchOpponent = (player) => {
    // second player
    setOpponent(opponent === "❎" ? "🅾️" : "❎")
    const updateSquare = [...squares]
    updateSquare[player] = opponent
    setSquares(updateSquare)
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="grid">
        {squares.map((value, index) => 
          <div key={index}>
            <Square 
              squares={squares}
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