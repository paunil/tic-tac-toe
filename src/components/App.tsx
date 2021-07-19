import React, { useState } from 'react'
import Board from './Board'
import Header from './Header'


function App() {

  const [currentPlayer, setCurrentPlayer] = useState<string>('x')

  const switchPlayer = () => {
    if (currentPlayer === 'x') {
      setCurrentPlayer('o')
    } else {
      setCurrentPlayer('x')
    }
  }

  return (
    <div className="app-container">
      <Header currentPlayer={currentPlayer}/>
      <Board currentPlayer={currentPlayer} switchPlayer={switchPlayer}/>
    </div>
  )
}

export default App