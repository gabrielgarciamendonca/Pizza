import { configureFonts } from 'react-native-paper';
import { Font } from 'react-native-paper/lib/typescript/types';

const regular: Font = { fontFamily: 'Roboto-Regular', fontWeight: 'normal' };
const medium: Font = { fontFamily: 'Roboto-Medium', fontWeight: '500' };
const light: Font = { fontFamily: 'Roboto-Light', fontWeight: '400' };
const thin: Font = { fontFamily: 'Roboto-Thin', fontWeight: '300' };

const fontConfig = {
  native: {
    regular: { ...regular },
    medium: { ...medium },
    light: { ...light },
    thin: { ...thin },
  },
};

export const theme = {
  colors: {
    orange: '#BF612A',
    white: '#f7f7f7',
    brown: '#591C27',
    gray: '#afaca3',
    red: '#A61B34',
  },

  fonts: configureFonts(fontConfig),
};
