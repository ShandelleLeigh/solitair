import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  theme => ({
    base: {
      margin: `0 ${theme.spacing(4)}px`,
      height: `calc(100% - ${theme.spacing(8)}px)`,
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
  // console.log('game table, ln 24, cardDeck:', deck, 'typeof:', typeof deck, 'length:', deck.length)
  return (
    <div>
      {
        (deck.length > 1) ?
          deck.map(card => {
            const { name, suit, /* cardNo,  value,  color */ } = card
            return (
              <div className={classes.card} key={`${name}-${suit}`}>
                  {name} of {suit}
              </div>
            )
        })
        : null
      }
    </div>
  )
}

const GameTable = ({
  game,
  _ // TODO: setGameState()
}) => {
  const {cardDeck} = game
  const classes = useStyles();
  return (
    <>
      <div className={classes.base} >
        <GameDeck deck={cardDeck} classes={classes}/>
      </div>
    </>
  )
}

export default GameTable;