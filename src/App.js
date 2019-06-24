import React from 'react';
import './App.css';

import { ThemeProvider, makeStyles } from '@material-ui/styles';


import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';


function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <ThemeProvider>
        <AppBar>
          Solitair Game
        </AppBar>
        <Paper>Paper Game Table</Paper>
        <div className="Table">
          Game Table
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
