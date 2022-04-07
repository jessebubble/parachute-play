import React from "react";
import { useColorMode } from '@chakra-ui/color-mode';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';

function Body() {
    const { colorMode } = useColorMode();
    const isDark = colorMode ==='dark';

    return (
        <Flex w='100%' maxWidth={{ base: '100vh', md: '130vh', lg: '130vh', xl: '130vh' }}>
            <Box alignself='center' px='32' py='16'>
                <Heading>
                <Text fontSize='2xl' fontWeight='semibold' align='right'></Text>
                <Text color={isDark ? 'gray.200' : 'gray.500'}></Text>  
                </Heading>
            </Box>

            <Box>

            </Box>
        </Flex>
    )
}



export default Body;