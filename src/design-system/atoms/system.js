const borders = ({ error, theme }) => ({
  'border-color': error ? theme.colors.errorRed : theme.colors.gray3,
  ':focus': {
    outline: 0,
    'border-color': theme.colors.blue1,
  },
});

export default borders;
