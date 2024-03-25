import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { toast } from 'sonner'

import { GameControls } from '@/components/game-controls'
import { HandDisplay } from '@/components/hand-display'
import { BlackjackGame } from '@/utils/blackjack-game'

export function Game() {
  const game = useRef(new BlackjackGame()).current
  const [playerHand, setPlayerHand] = useState([])
  const [dealerHand, setDealerHand] = useState([])
  const [gameStatus, setGameStatus] = useState('In Progress')

  useEffect(() => {
    startNewGame()
  }, [])

  const startNewGame = () => {
    game.startNewGame()
    updateHands()
    setGameStatus('In Progress')
  }

  const handleHit = () => {
    if (gameStatus !== 'In Progress') return

    game.playerHit()
    updateHands()
    if (game.calculateScore(game.playerHand) > 21) {
      setGameStatus('You Lost')
      toast.error('You Lost!')
    }
  }

  const handleStand = () => {
    if (gameStatus !== 'In Progress') return

    game.dealerPlay()
    updateHands()
    const result = game.checkWinner()
    const status =
      result === 'Player' ? 'You Won' : result === 'Dealer' ? 'You Lost' : 'Tie'
    setGameStatus(status)
    toast[
      result === 'Player' ? 'success' : result === 'Dealer' ? 'error' : 'info'
    ](status)
  }

  const updateHands = () => {
    setPlayerHand([...game.playerHand])
    setDealerHand([...game.dealerHand])
  }

  return (
    <>
      <Helmet title="Blackjack" />
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <HandDisplay
          title="Player's Hand"
          hand={playerHand}
          score={game.calculateScore(playerHand)}
        />
        <HandDisplay
          title="Dealer's Hand"
          hand={dealerHand}
          score={
            gameStatus === 'In Progress' ? '?' : game.calculateScore(dealerHand)
          }
          hideFirstCard={gameStatus === 'In Progress'}
        />
        <GameControls
          gameStatus={gameStatus}
          onHit={handleHit}
          onStand={handleStand}
          onStartNewGame={startNewGame}
        />
      </div>
    </>
  )
}
