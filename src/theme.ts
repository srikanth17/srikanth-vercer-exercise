const theme = {
  palette: {
    background: {
      primary: '#FFF',
      filter: '#e6e6e6',
      header: '#364051',
    },
    text: {
      primary: '#424242',
      header: '#fff',
    },
  },
  spacing: (multiplier = 1) => `${4 * multiplier}px`,
  typography: {
    h1: {
      'font-weight': '500',
      'font-size': '2rem',
    },
    body: {
      'font-weight': 'normal',
      'font-size': '1rem',
    },
  },
};

export default theme;
