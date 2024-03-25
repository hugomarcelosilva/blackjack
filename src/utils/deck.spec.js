import { describe, expect, it } from 'vitest'

import { Deck } from './deck'

describe('Deck', () => {
  it('should initialize with the correct number of cards', () => {
    const deck = new Deck()
    expect(deck.cards.length).toBe(52)
  })

  it('should can shuffle cards', () => {
    const deck = new Deck()
    const originalOrder = deck.cards.map((card) => card.value)
    deck.shuffle()
    const shuffledOrder = deck.cards.map((card) => card.value)
    expect(shuffledOrder).not.toEqual(originalOrder)
  })

  it('should deal one card from the deck', () => {
    const deck = new Deck()
    const initialCount = deck.cards.length
    const card = deck.dealOne()
    expect(deck.cards.length).toBe(initialCount - 1)
    expect(card).toHaveProperty('suit')
    expect(card).toHaveProperty('value')
    expect(card).toHaveProperty('points')
  })
})
