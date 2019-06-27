import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card} from '@material-ui/core';
// import theme from './styles';

const useStyles = makeStyles(
  theme => ({
    base: {
      margin: `0 ${theme.spacing(4)}px`,
      height: `calc(100% - ${theme.spacing(8)}px)`,
      // backgroundColor: '#4c954c',
      backgroundColor: theme.palette.secondary.main,
    },
    card: {
      backgroundColor: 'black',
      color: 'white',
      width: '20%',
    }
  })
);

const GameDeck = ({deck, classes}) => {
  console.log('game table, ln 24, cardDeck:', deck, 'typeof:', typeof deck, 'length:', deck.length)
  return (
    <div>
      Game deck
      <div>{
        (deck.length > 1) ?
        deck.map( card => {
          const {cardNo, name, value, suit, color} = card
          console.log('card No: ', cardNo)
          return (
            <div className={classes.card}>
                {name} of {suit}
            </div>)

        })
        : null
      }
       </div>
    </div>
  )
}

const GameTable = (deck) => {
  console.log('game table ln 47: deck: ', deck.game)
  const classes = useStyles();

  return (
    <>
      <div
        className={classes.base}
      >

      Game Table

      {/* TODO: Game has state of cards */}
      {/* TODO: Generate Cards */}
        <GameDeck deck={deck.game} classes={classes}/>
      </div>
    </>
  )
}

export default GameTable;