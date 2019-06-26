const suits = [
  { suit: 'Diamonds', color: 'black' },
  { suit: 'Spades',   color: 'black' },
  { suit: 'Hearts',   color: 'red'   },
  { suit: 'Clubs',    color: 'red'   },
]

const numbers = [
  { name: 'Ace',   val: '1'  },
  { name: '2',     val: '2'  },
  { name: '3',     val: '3'  },
  { name: '4',     val: '4'  },
  { name: '5',     val: '5'  },
  { name: '6',     val: '6'  },
  { name: '7',     val: '7'  },
  { name: '8',     val: '8'  },
  { name: '9',     val: '9'  },
  { name: '10',    val: '10' },
  { name: 'Jack',  val: '11' },
  { name: 'Queen', val: '12' },
  { name: 'King',  val: '13' },
]


function getCompleteDeck() {
  const orderedDeck = {};
  for each (var suit in s) {

  }
  return orderedDeck
}

function getShuffledDeck(deck) {
  let shuffledDeck = {};
  shuffledDeck = {...deck}
  return shuffledDeck
}