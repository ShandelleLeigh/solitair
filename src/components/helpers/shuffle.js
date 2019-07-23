/**
 * Shuffle deck of cards
 * Shamelessly ripped off from:  https://stackoverflow.com/a/2450976/1293256
 */
const shuffle = function (deck) {

  let shuffledCards = [...deck];
  let currentIndex = shuffledCards.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = shuffledCards[currentIndex];
    shuffledCards[currentIndex] = shuffledCards[randomIndex];
    shuffledCards[randomIndex] = temporaryValue;
  }

  return shuffledCards;

};

export default shuffle;