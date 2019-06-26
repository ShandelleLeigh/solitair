import React, { useState } from 'react';
import {
  Toolbar, AppBar, Menu, IconButton, MenuItem, Typography,
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

function TopMenu() {
  const classes = useStyles()
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      <AppBar position='sticky' className={classes.appBar}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            onClick={(e)=>{
              setMenuOpen(!menuOpen);
              setAnchorEl(e.currentTarget);
            }}
            aria-controls='menu-open'
          >
            <MenuIcon className={classes.menuButtonIcon}/>
          </IconButton>
          <Typography>Solitair</Typography>
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
          <MenuItem>New Game</MenuItem>
          <MenuItem>Restart This Game</MenuItem>
          <MenuItem>Draw 1 Card</MenuItem>
          <MenuItem>Draw 3 Cards</MenuItem>
          <MenuItem>Top Scores</MenuItem>
        </Menu>
      </AppBar>
    </>
  );
}

export default TopMenu;
