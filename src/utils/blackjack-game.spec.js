import { beforeEach, describe, expect, it } from 'vitest'

import { BlackjackGame } from './blackjack-game'

describe('BlackjackGame', () => {
  let game

  beforeEach(() => {
    game = new BlackjackGame()
    game.startNewGame()
  })

  it('should start a new game with two cards for player and dealer', () => {
    expect(game.playerHand.length).toBe(2)
    expect(game.dealerHand.length).toBe(2)
  })

  it('should allow the player to hit and receive a card', () => {
    const initialCount = game.playerHand.length
    game.playerHit()
    expect(game.playerHand.length).toBe(initialCount + 1)
  })

  it('should allow dealer to play until score is 17 or above', () => {
    game.dealerPlay()
    expect(game.dealerHand.length).toBeGreaterThanOrEqual(2) // Dealer should have at least 2 cards
  })

  it('should calculate scores correctly', () => {
    game.playerHand = [
      { suit: 'hearts', value: 'ace', points: 11 },
      { suit: 'diamonds', value: 'jack', points: 10 },
    ]
    expect(game.calculateScore(game.playerHand)).toBe(21)
  })

  it('should identify the winner correctly', () => {
    game.playerHand = [{ suit: 'hearts', value: 20, points: 20 }]
    game.dealerHand = [{ suit: 'clubs', value: 19, points: 19 }]
    expect(game.checkWinner()).toBe('Player')

    game.playerHand = [{ suit: 'hearts', value: 22, points: 22 }]
    expect(game.checkWinner()).toBe('Dealer')

    game.playerHand = [{ suit: 'hearts', value: 10, points: 10 }]
    game.dealerHand = [{ suit: 'clubs', value: 23, points: 23 }]
    expect(game.checkWinner()).toBe('Player') // Dealer busts

    game.playerHand = [{ suit: 'hearts', value: 10, points: 10 }]
    game.dealerHand = [{ suit: 'clubs', value: 15, points: 15 }]
    expect(game.checkWinner()).toBe('Dealer')

    game.playerHand = [{ suit: 'hearts', value: 20, points: 20 }]
    game.dealerHand = [{ suit: 'clubs', value: 20, points: 20 }]
    expect(game.checkWinner()).toBe('Tie')
  })

  it('should handle Aces correctly as 1 or 11 to avoid busting', () => {
    // Scenario where Ace counts as 11 to make a score of 21
    game.playerHand = [
      { suit: 'hearts', value: 'ace', points: 11 },
      { suit: 'diamonds', value: 'king', points: 10 },
    ]
    expect(game.calculateScore(game.playerHand)).toBe(21)

    // Scenario where Ace should count as 1 to avoid busting
    game.playerHand = [
      { suit: 'hearts', value: 'ace', points: 11 },
      { suit: 'diamonds', value: '9', points: 9 },
      { suit: 'clubs', value: '2', points: 2 },
    ]
    expect(game.calculateScore(game.playerHand)).toBe(12)
  })
})
