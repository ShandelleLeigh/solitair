import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  theme => ({
    base: {
      margin: `0 ${theme.spacing(4)}px`,
      height: `calc(100% - ${theme.spacing(8)}px)`,
      backgroundColor: theme.palette.secondary.main,
      width: `calc(100% - ${theme.spacing(8)}px)`,
    },
    card: {
      backgroundColor: 'black',
      color: 'white',
      width: '20%',
      zIndex: '2',
    },
    placeholder: {
      border: 'rgba(255,255,255,.6) double',
      height: '100px',
      width: '70px',
      borderRadius: '5px',
      margin: '10px',
      position: 'absolute',
      left: '5px',
      top: '5px',
      zIndex: '3',
    }
  })
);

const GameDeck = ({deck, classes}) => {
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

const CardPlaceHolder = ({classes}) => {
  const style= classes.placeholder
  console.log(classes.placeholder, style)
  return (
      <div className={classes.placeholder}/>
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
        <CardPlaceHolder classes={classes}/>
      </div>
    </>
  )
}

export default GameTable;