import React, { useState } from 'react';
import {
  Toolbar, AppBar, Menu, IconButton, MenuItem,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  theme => ({
    menuButton: {
      marginRight: theme.spacing(2),
      backgroundColor: theme.palette.primary.main,
    },
    menuButtonIcon: {
      fill: theme.palette.neutral.dark,
    },
    appBar: {
      color: theme.palette.neutral.dark,
      backgroundColor: theme.palette.primary.light,
    },
    menu: {
      marginTop: theme.spacing(6),
      marginLeft: theme.spacing(-3),
    },
    menuPaper: {
      backgroundColor: theme.palette.primary.main,
      borderRadius: '0 0 4px 4px',
    },
  })
);

function TopMenu({startNewGame}) {
  const classes = useStyles()
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleButtonClick = (e)=>{
    setMenuOpen(!menuOpen);
    setAnchorEl(e.currentTarget);
  }
  const handleItemClick = () => {
    setMenuOpen(false)
  }
  const handleNewGame = () => {
    handleItemClick()
    startNewGame()
  }

  return (
    <>
      <AppBar position='sticky' className={classes.appBar}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            onClick={handleButtonClick}
            aria-controls='menu-open'
          >
            <MenuIcon className={classes.menuButtonIcon}/>
          </IconButton>
          <Typography>Solitaire</Typography>
        </Toolbar>
        <Menu
          open={menuOpen}
          onClose={()=>setMenuOpen(false)}
          anchorEl={anchorEl}
          className={classes.menu}
          id='memu-open'
          PaperProps={{className: classes.menuPaper}}
          elevation={6}
        >
          <MenuItem onClick={handleNewGame} >New Game</MenuItem>
          <MenuItem onClick={handleItemClick} >Restart This Game</MenuItem>
          <MenuItem onClick={handleItemClick} >Draw 1 Card</MenuItem>
          <MenuItem onClick={handleItemClick} >Draw 3 Cards</MenuItem>
          <MenuItem onClick={handleItemClick} >Top Scores</MenuItem>
        </Menu>
      </AppBar>
    </>
  );
}

export default TopMenu;
