import React from 'react';
import { useColorMode } from '@chakra-ui/color-mode';
/* import { Image } from '@chakra-ui/image'; */
import { Stack, Flex, Box, Text } from '@chakra-ui/layout';

function Header() {
    const { colorMode } = useColorMode();
    const isDark = colorMode ==='dark';

    return (
        <Stack>
            <Flex alignSelf='center'>
                <Box align='center'>
                <Text fontSize='7xl' fontWeight='bold' bgGradient='linear(to-r, cyan.400, blue.500, purple.600)' bgClip='text'>🪂 Parachute Play 🪂</Text>
                <Text fontSize='1xl' fontWeight='semibold' align='right'>word game created by JAM 🪕</Text>
                <Text color={isDark ? 'gray.200' : 'gray.500'}></Text>
                </Box>

                {/* <Image
                    alignSelf='center' 
                    borderRadius='full'
                    backgroundColor='transparent' boxShadow='lg'
                    boxSize='300px' src='https://ca.slack-edge.com/T02GXRVP58D-U02JWDR2ZRN-f9cd883775c3-512' /> */}
            </Flex>
        </Stack>
    )


}

export default Header;