import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  theme => ({
    base: {
      margin: `0 ${theme.spacing(4)}px`,
      height: `calc(100% - ${theme.spacing(8)}px)`,
      backgroundColor: '#4c954c',
    }
  })
);

const GameTable = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div
        className={classes.base}
      >

      Game Table

      {/* TODO: Game has state of cards */}
      {/* TODO: Generate Cards */}

      </div>
    </Fragment>
  )
}

export default GameTable;