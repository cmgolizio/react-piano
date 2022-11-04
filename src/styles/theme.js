import { extendTheme } from '@chakra-ui/react';

import KeyStyles from './KeyStyles';

const lightGradient = 'linear(to-br, #8EFF9D 0%, #93CE94 39%, #844CC5 100%)';
const darkGradient = 'linear(to-br, #02FF2C 0%, #03CE00 34%, #5601C5 100%)';

const theme = extendTheme({
  styles: {
    global: props => ({
      'html, body': {
        bgGradient: props.colorMode === 'dark' ? darkGradient : lightGradient,
        userSelect: 'none',
        outline: 'none',
      },
    }),
  },
  components: {
    KeyStyles,
  },
});

export default theme;
