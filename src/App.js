import React, {useState  } from 'react';
import './App.css';
import {getCompleteDeck} from './components/cards/makeDeck';

import { ThemeProvider } from '@material-ui/styles';
import TopMenu from './components/TopMenu';
import GameTable from './components/GameTable'
import theme from './styles';

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
        <GameTable game={gameState} setGameState={setGameState}/>
      </ThemeProvider>
    </div>
  );
}

export default App;
