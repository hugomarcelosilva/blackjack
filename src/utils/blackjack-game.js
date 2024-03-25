import { Deck } from './deck'

export class BlackjackGame {
  constructor() {
    this.deck = new Deck()
    this.deck.shuffle()
    this.playerHand = []
    this.dealerHand = []
  }

  startNewGame() {
    this.deck = new Deck() // Ensure a fresh deck for each new game
    this.deck.shuffle()
    this.playerHand = [this.deck.dealOne(), this.deck.dealOne()]
    this.dealerHand = [this.deck.dealOne(), this.deck.dealOne()]
  }

  playerHit() {
    if (this.calculateScore(this.playerHand) < 21) {
      this.playerHand.push(this.deck.dealOne())
    }
    return this.calculateScore(this.playerHand)
  }

  dealerPlay() {
    while (this.calculateScore(this.dealerHand) < 17) {
      this.dealerHand.push(this.deck.dealOne())
    }
  }

  calculateScore(hand) {
    let score = hand.reduce((acc, card) => acc + card.points, 0)
    let aces = hand.filter((card) => card.value === 'ace').length

    while (score > 21 && aces > 0) {
      score -= 10
      aces -= 1
    }

    return score
  }

  checkWinner() {
    const playerScore = this.calculateScore(this.playerHand)
    const dealerScore = this.calculateScore(this.dealerHand)

    if (playerScore > 21) {
      return 'Dealer'
    } else if (dealerScore > 21 || playerScore > dealerScore) {
      return 'Player'
    } else if (dealerScore > playerScore) {
      return 'Dealer'
    } else {
      return 'Tie'
    }
  }
}
