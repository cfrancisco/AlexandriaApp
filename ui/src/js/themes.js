/*
This file is planned to contains all custom style (Design Tokens)
to be applied on Material UI Theme;
*/

const myStyles = {
  root: {
    display: 'flex',
  },
  grid: {
    width: 1000,
  },
  palette: {
    type: 'dark',
    bgColor: '#303030',
    background: {
      default: "#303030",
    },
    primary: {
      main: '#055E68',
    },
    secondary: {
      main: '#411E8F',
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"Lato"', 'sans-serif'].join(','),
  },
};

export default myStyles;
