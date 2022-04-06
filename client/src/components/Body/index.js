import React from "react";
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';

function Body() {
    return (
        <Flex w='100%' maxWidth={{ base: '100vh', md: '130vh', lg: '130vh', xl: '130vh' }}>
            <Box alignself='center' px='32' py='16'>
                <Heading></Heading>
                <Text></Text>

            </Box>
        </Flex>
    )
}



export default Body;