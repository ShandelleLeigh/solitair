import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import teal from '@material-ui/core/colors/teal';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: pink['A100'],
      light:  pink[100],
      dark: pink[900],
      // contrastText: '#000000',
    },
    secondary: {
      main: teal['A400'],
      light:  teal[100],
      dark: teal[900],
      // contrastText: '',
    },
    neutral: {
      light: '#919191',
      main: '#3b3b3b',
      dark: '#1c1c1c',
    }
  },
});

export default theme;