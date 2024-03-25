import { describe, expect, it, vi } from 'vitest'

import { Card } from './card'

describe('Card', () => {
  const numberWords = [
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
  ]
  numberWords.forEach((word, index) => {
    it(`should calculate correct points for the number card: ${word}`, () => {
      const card = new Card('hearts', word)
      expect(card.points).toBe(index + 2)
    })
  })

  it('should calculate correct points for a Jack', () => {
    const card = new Card('hearts', 'jack')
    expect(card.points).toBe(10)
  })

  it('should calculate correct points for a Queen', () => {
    const card = new Card('hearts', 'queen')
    expect(card.points).toBe(10)
  })

  it('should calculate correct points for a King', () => {
    const card = new Card('hearts', 'king')
    expect(card.points).toBe(10)
  })

  it('should calculate correct points for an Ace', () => {
    const card = new Card('hearts', 'ace')
    expect(card.points).toBe(11)
  })

  it('should return 0 points for an invalid card value', () => {
    const consoleSpy = vi.spyOn(console, 'error')
    const card = new Card('hearts', 'invalid')
    expect(card.points).toBe(0)
    expect(consoleSpy).toHaveBeenCalled()
  })
})
