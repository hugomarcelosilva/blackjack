export class Card {
  constructor(suit, value) {
    this.suit = suit
    this.value = value
    this.points = this.calculatePoints()
  }

  calculatePoints() {
    switch (this.value.toLowerCase()) {
      case 'ace':
        return 11
      case 'jack':
      case 'queen':
      case 'king':
        return 10
      default: {
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
        const index = numberWords.indexOf(this.value.toLowerCase())
        // If found in the array, add 2 since the array index starts at 0 and card values start at 2
        if (index !== -1) {
          return index + 2
        }
        // Fallback case if for some reason the value doesn't match
        console.error('Invalid card value:', this.value)
        return 0
      }
    }
  }
}
