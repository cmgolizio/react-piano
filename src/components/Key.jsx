import React, { useContext } from 'react';
import { Box, useStyleConfig, useMediaQuery } from '@chakra-ui/react';

import { playSound, stopSound, filterSounds } from '../helpers';
import { PianoContext } from '../App';

const Key = (props) => {
  const { variant, note, children, kbd, keyType, ...rest } = props;
  const { activeKey, setActiveKey } = useContext(PianoContext);
  const styles = useStyleConfig('KeyStyles', { variant });
  const [shouldAddText] = useMediaQuery('(min-width: 1280px)')

  const handleClick = (e) => {
    e.preventDefault();

    let clickedKey = e.target.value;
    let noteAudio = filterSounds(clickedKey);

    stopSound(noteAudio);
    playSound(noteAudio);
    setActiveKey(clickedKey);
  };

  const handleKeyPress = (e) => {
    e.preventDefault();

    let pressed = e.key === ';' ? ';' : e.key.toUpperCase();
    let noteAudio = filterSounds(pressed);

    stopSound(noteAudio);
    playSound(noteAudio);
    setActiveKey(pressed);
  };

  React.useEffect(() => {
    console.log('ACTIVE KEY: ', activeKey)
  }, [activeKey])

  return (
    <Box
      as='button'
      __css={styles}
      variant={keyType}
      onClick={(e) => handleClick(e)}
      onKeyDown={(e) => handleKeyPress(e)}
      onKeyUp={() => setActiveKey('')}
      {...rest}
    >
      {shouldAddText ? children : ''}
    </Box>
  );
};

export default Key;