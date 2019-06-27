import React, {useState  } from 'react';
import './App.css';
import {getCompleteDeck} from './components/cards/makeDeck';

import { ThemeProvider } from '@material-ui/styles';
import TopMenu from './components/TopMenu';
import GameTable from './components/GameTable'
import theme from './styles';

// const GameDeck = (deck) => {
//   let cardDeck = deck.deck
//   console.log('cardDeck:', deck, 'typeof:', typeof deck, 'length:', deck.deck.length)
//   return (
//     <div>
//       Game deck
//       {
//         (cardDeck.length > 1) ?
//         cardDeck.forEach( card => {
//           const {cardNo, name, value, suit, color} = card
//           console.log('card No: ', cardNo)
//           return (
//             <div>
//                 card number:
//               {card.cardNo} {name} {value} {suit} {color}
//             </div>
//           )
//         })
//         : null
//       }
//     </div>
//   )
// }

function App() {
  const [gameState, setGameState] = useState({cardDeck: {}})
  const startNewGame = () => {
    let cardDeck = getCompleteDeck()
    setGameState({cardDeck})
  }
  console.log('game state:', gameState)
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <ThemeProvider  theme={theme} >
        <TopMenu startNewGame={startNewGame}/>
        <GameTable game={gameState.cardDeck} setGameState={setGameState}/>
      </ThemeProvider>
    </div>
  );
}

export default App;
