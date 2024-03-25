import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { HandDisplay } from './hand-display'

describe('HandDisplay', () => {
  const hand = [
    { suit: 'hearts', value: 'A' },
    { suit: 'spades', value: 'K' },
  ]

  it('should render the title and score', () => {
    render(
      <HandDisplay
        title="Player's Hand"
        hand={hand}
        score={21}
        hideFirstCard={false}
      />,
    )
    expect(screen.getByText("Player's Hand")).toBeInTheDocument()
    expect(screen.getByText('(21)')).toBeInTheDocument()
  })

  it('should render the correct number of cards', () => {
    render(
      <HandDisplay
        title="Player's Hand"
        hand={hand}
        score={21}
        hideFirstCard={false}
      />,
    )
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(hand.length)
  })

  it('should hide the first card image when hideFirstCard is true', () => {
    render(
      <HandDisplay
        title="Dealer's Hand"
        hand={hand}
        score={'?'}
        hideFirstCard={true}
      />,
    )
    const firstCardImage = screen.getAllByRole('img')[0]
    expect(firstCardImage).toHaveAttribute('src', 'cards/blue_back.png')
  })

  it('should show all cards face up when hideFirstCard is false', () => {
    render(
      <HandDisplay
        title="Player's Hand"
        hand={hand}
        score={21}
        hideFirstCard={false}
      />,
    )
    const firstCardImage = screen.getAllByRole('img')[0]
    expect(firstCardImage).toHaveAttribute('src', 'cards/A of hearts.png')
    const secondCardImage = screen.getAllByRole('img')[1]
    expect(secondCardImage).toHaveAttribute('src', 'cards/K of spades.png')
  })
})
