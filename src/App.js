import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="grid">
        {squares.map((value, index) => 
          <div key={index}>
            <Square />
          </div>
        )}
      </div>
    </>
  )
}

export default App