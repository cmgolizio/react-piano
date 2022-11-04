import React, { useContext } from 'react';

import { PianoContext } from '../App';
import KeysContainer from './KeysContainer';

const Piano = () => {
  // const keys = generateKeys();
  const { keys } = useContext(PianoContext);

  return (
    <KeysContainer>
      { keys.map(key => key) }
    </KeysContainer>
  );
};

export default Piano;