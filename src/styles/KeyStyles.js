import { defineStyleConfig } from '@chakra-ui/react';

const KeyStyles = defineStyleConfig({
  baseStyle: {
    h: ['3rem', '6rem', '12.5rem', '20rem'],
    w: ['100%', '3.5rem', '5.5rem', '6rem'],
    fontSize: ['0.5rem', '1rem', '2rem', '3rem'],
    color: '#000000',
    pos: 'relative',
    float: ['bottom', null, null, 'left'],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    bg: 'ghostwhite',
    zIndex: '1',
    p: ['0 0.5rem', null, null, '0.5rem 0'],
    borderRadius: ['5px', null, null, '0 0 5px 5px'],
    borderLeft: '1px solid hsl(0, 0%, 73%)',
    borderBottom: '1px solid hsl(0, 0%, 73%)',
    outline: 'none',
    _active: {
      bg: '#b2f4ff',
      borderX: '3px solid #67d5e8',
      borderBottom: '2px solid #67d5e8',
      outline: 'none',
    },
    _pressed: {
      outline: 'none',
    },
    _focus: {
      outline: 'none',
    },
    _focusWithin: {
      outline: 'none',
    },
    _focusVisible: {
      outline: 'none',
    },
  },
  variants: {
    black: {
      bg: '#000000',
      h: ['3rem', '4rem', '8rem', '15rem'],
      w: ['100%', null, null, '3rem'],
      fontSize: ['0.25rem', '0.5rem', '0.75rem', '2rem'],
      // h: '8rem',
      // w: '2rem',
      color: 'ghostwhite',
      borderRadius: ['3px', null, null, '0 0 3px 3px'],
      m: ['0 -2rem 0 0', null, null, '0 0 0 -2rem'],
      border: '1px solid #000000',
      zIndex: '2',
      _active: {
        bg: '#9ff1ff',
        color: '#16161D',
        borderX: '3px solid #67d5e8',
        borderBottom: '2px solid #67d5e8',
      },
    },
    firstWhite: {
      borderRadius: ['5px', null, null, '10px 0 5px 5px'],
    },
    lastWhite: {
      borderRadius: ['5px', null, null, '0 10px 5px 5px'],
      m: ['0 -1rem 0 0', null, null, '0 0 0 -1rem'],
    },
    whiteOffset: {
      m: ['0 -1rem 0 0', null, null, '0 0 0 -1rem'],
    },
  },
  defaultProps: {
    variant: 'white',
  },
});

export default KeyStyles;
