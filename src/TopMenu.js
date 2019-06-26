import React, {Fragment} from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  theme => ({
    menuButton: {
      marginRight: theme.spacing(2),
    }
  })
);

function TopMenu() {
  const classes = useStyles()
  return (
    <Fragment>
      <AppBar position='sticky'>
        <Toolbar>
          <IconButton className={classes.menuButton}>
            <MenuIcon/>
          </IconButton>

          Solitair Game

          {/*
            //TODO: Drop Down Menu with options of restart this game, start new game, draw 1 or 3 cards at a time, etc
          */}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

export default TopMenu;
