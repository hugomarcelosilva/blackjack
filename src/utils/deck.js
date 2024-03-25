import { Card } from './card'

export class Deck {
  constructor() {
    this.cards = []
    this.populateDeck()
  }

  populateDeck() {
    const suits = ['hearts', 'diamonds', 'clubs', 'spades']
    const values = [
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'jack',
      'queen',
      'king',
      'ace',
    ]

    for (const suit of suits) {
      for (const value of values) {
        this.cards.push(new Card(suit, value))
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
    }
  }

  dealOne() {
    return this.cards.pop()
  }
}
