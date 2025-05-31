/**
 * Deck
 * 52 Cards
 * 4 Suits ( Clubs, Spades, Hearts, Diamonds )
 * 2 Players
 * Ranks (Numbers)
 * Values
 * Shuffle
 * Keep Score and Winner
 * You and Player 2s Hand
 * Dealing of cards
 */

// Displayed it on web page 
function log(message) {
  const output = document.getElementById("output");
  console.log(output.textContent += message + "\n");
}

// For the high vales like 11 , 12 , & 13 
function getCardName(value) {
  switch (value) {
    case 11: return "Jack";
    case 12: return "Queen";
    case 13: return "King";
    case 14: return "Ace";
    default: return value;
  }
}

// My card class is showing the suits and value of the cards in the deck.
class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

// My deck class shows the numeric values of the cards as well as the 4 suits in the deck.
class Deck {
  constructor() {
    this.suits = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"];
    this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; 
    this.cards = [];

    for (let suit of this.suits) {
      for (let value of this.values) {
        this.cards.push(new Card(suit, value));
      }
    }
  }

  // Shuffling the deck so you get a different card each game.
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  // Dealing the cards to each player in the game.
  deal() {
    return [this.cards.slice(0, 26), this.cards.slice(26)];
  }
}

// Game class is showing the players decks and how it will iterate through the deck randomly to give the player each a cards and who will have the higher card with final scores of the wins
function playGame() {
  const deck = new Deck();
  deck.shuffle();
  const [player1Deck, player2Deck] = deck.deal();
  let player1Score = 0;
  let player2Score = 0;

  for (let i = 0; i < 26; i++) {
    const card1 = player1Deck[i];
    const card2 = player2Deck[i];

    log(`Round ${i + 1}: Player 1 -> ${getCardName(card1.value)} of ${card1.suit}, Player 2 -> ${getCardName(card2.value)} of ${card2.suit}`);

    if (card1.value > card2.value) {
      player1Score++;
    } else if (card2.value > card1.value) {
      player2Score++;
    }
  }

  // Providing the final score for each player in the game as well as stating who is the winner.
  log(`\nFinal Score: Player 1 = ${player1Score}, Player 2 = ${player2Score}`);
  log(player1Score > player2Score ? "🎉 Player 1 Wins!" : player2Score > player1Score ? "🎉 Player 2 Wins!" : "🤝 It's a tie!");
}

// To begin the game.
playGame();