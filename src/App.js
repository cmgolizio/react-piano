import React, { useState, createContext } from 'react';
import { Box } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import Piano from './components/Piano';
import { generateKeys } from './helpers';
import { allKeys } from './helpers/constants';

export const PianoContext = createContext();

function App() {
  const [activeKey, setActiveKey] = useState('');
  const keys = generateKeys(allKeys);
  return (
    <PianoContext.Provider
      value={{
        activeKey,
        setActiveKey,
        keys,
      }}
    >
      <Box textAlign="center" fontSize="xl" h="100vh" w="100vw">
        <ColorModeSwitcher justifySelf="flex-end" />
        <Piano />
      </Box>
    </PianoContext.Provider>
  );
}

export default App;
