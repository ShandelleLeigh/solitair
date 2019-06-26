import React from 'react';
import './App.css';

import { ThemeProvider } from '@material-ui/styles';
import TopMenu from './components/TopMenu';
import PaperGameTable from './components/PaperGameTable'
import theme from './styles';


function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <ThemeProvider  theme={theme} >
        <TopMenu/>
        <PaperGameTable/>
      </ThemeProvider>
    </div>
  );
}

export default App;
