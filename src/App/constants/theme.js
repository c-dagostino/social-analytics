// Let's use 4 pixels for our grid, which is the default in styled system
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const fontSizes = [12, 14, 16, 18, 22, 26, 30, 40, 85];

const fonts = {
  zilla: 'serif',
  poppins: 'sans-serif !important',
  sofia: 'sans-serif !important',
};

const baseColors = {
  white: '#fff',
  gray1: '#e0e1e3',
  gray2: '#d2d7e0',
  gray3: '#a1a6ac',
  gray4: '#31363B',
  gray5: '#1818b1',
  gray6: '#f7f9fa',
  blue1: '#1098cf',
  blue2: '#15b5ee',
  blue3: '#ebf2f7',
  teal: '#5ce3d6',
  orange: '#f76654',
  errorRed: '#dd240d',
};

const colors = {
  ...baseColors,

  illustrationBlue: baseColors.blue2,
  shadow: baseColors.gray6,
  hover: baseColors.blue3,
};

const maxContentWidth = '800px';

// example usage:
//  margin: ['10px' '20px']
// output:
//  margin: 10px;
//  @media (min-width:670px) { margin: 20px }
const breakpoints = ['670px', '768px'];

const radius = '5px';

const borders = {
  container: `1px solid ${baseColors.gray1}`,
};

const textStyles = {
  heading1: {
    fontSize: `${fontSizes[8]}px`,
    fontWeight: 800,
  },
  heading2: {
    fontSize: `${fontSizes[7]}px`,
    fontWeight: 800,
  },
  heading3: {
    fontSize: `${fontSizes[6]}px`,
    fontWeight: 800,
  },
  heading4: {
    fontSize: `${fontSizes[5]}px`,
    fontWeight: 600,
  },
  heading5: {
    fontSize: `${fontSizes[4]}px`,
    fontWeight: 600,
  },
  heading6: {
    fontSize: `${fontSizes[3]}px`,
    fontWeight: 600,
  },
  display1: {
    fontSize: `${fontSizes[1]}px`,
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  display2: {
    fontSize: `${fontSizes[2]}px`,
    fontWeight: 300,
  },
};

const THEME = {
  colors,
  borders,
  breakpoints,
  space,
  fontSizes,
  fonts,
  fontFamily: fonts.poppins,
  textStyles,
  radius,
  maxContentWidth,
};

export default THEME;
