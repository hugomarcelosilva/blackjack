import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { GameControls } from './game-controls'

describe('GameControls', () => {
  it('should render "Hit" and "Stand" buttons when game is in progress', () => {
    render(
      <GameControls
        gameStatus="In Progress"
        onHit={() => {}}
        onStand={() => {}}
      />,
    )
    expect(screen.getByText('Hit')).toBeInTheDocument()
    expect(screen.getByText('Stand')).toBeInTheDocument()
  })

  it('should does not render "New Game" button when game is in progress', () => {
    render(
      <GameControls
        gameStatus="In Progress"
        onHit={() => {}}
        onStand={() => {}}
      />,
    )
    expect(screen.queryByText('New Game')).not.toBeInTheDocument()
  })

  it('should call the appropriate function when "Hit" button is clicked', () => {
    const onHitMock = vi.fn()
    render(
      <GameControls
        gameStatus="In Progress"
        onHit={onHitMock}
        onStand={() => {}}
      />,
    )

    fireEvent.click(screen.getByText('Hit'))
    expect(onHitMock).toHaveBeenCalledTimes(1)
  })

  it('should call the appropriate function when "Stand" button is clicked', () => {
    const onStandMock = vi.fn()
    render(
      <GameControls
        gameStatus="In Progress"
        onHit={() => {}}
        onStand={onStandMock}
      />,
    )
    fireEvent.click(screen.getByText('Stand'))
    expect(onStandMock).toHaveBeenCalledTimes(1)
  })

  it('should render "New Game" button when game is not in progress', () => {
    render(
      <GameControls gameStatus="Not In Progress" onStartNewGame={() => {}} />,
    )
    expect(screen.getByText('New Game')).toBeInTheDocument()
  })

  it('should call the appropriate function when "New Game" button is clicked', () => {
    const onStartNewGameMock = vi.fn()
    render(
      <GameControls
        gameStatus="Not In Progress"
        onStartNewGame={onStartNewGameMock}
      />,
    )
    fireEvent.click(screen.getByText('New Game'))
    expect(onStartNewGameMock).toHaveBeenCalledTimes(1)
  })
})
