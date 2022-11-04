import React from 'react';
import { Flex } from '@chakra-ui/react';

const KeysContainer = ({ children }) => {
  return React.useMemo(() => (
      <Flex
        h={['100%', null, null, '24.5rem']}
        w={['90%', 'fit-content', 'max-content', 'max-content']}
        m={['auto', null, null, '15rem auto']}
        // p='6rem 3rem 0 4rem'
        pos='relative'
        border={['3rem solid #16161D', null, null, '5rem solid #16161D']}
        borderRadius='1rem'
        bg='#16161D'
        boxShadow='0 0 50px gray'
        flexDir={['column', 'column', 'row', 'row']}
        justify='center'
        outline='none'
      >
        {children}
      </Flex>
    ), [children]
  )
};

export default KeysContainer;