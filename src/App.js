import React from 'react';
import './App.css';

import { ThemeProvider,
  //  makeStyles
} from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import TopMenu from './TopMenu';
import PaperGameTable from './PaperGameTable'


function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <ThemeProvider>
        <TopMenu/>
        <PaperGameTable/>
      </ThemeProvider>
    </div>
  );
}

export default App;
