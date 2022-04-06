import React from 'react';
import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Flex, VStack, Heading, Spacer } from '@chakra-ui/layout';
import { FaSun, FaMoon, FaGithub} from 'react-icons/fa';

function Nav() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    return (
        <VStack p={5}>
            <Flex w='100%'>
                <Heading
                    ml='8' size='md' fontweight='semibold' color='cyan.400'>
                </Heading>
                <Spacer></Spacer>
                <IconButton icon={<FaGithub />} isRound='true' 
                    onClick={() =>
                    window.open("https://github.com/mikebashford")}></IconButton>
                <IconButton ml={2} icon={<FaGithub />} isRound='true' 
                    onClick={() =>
                    window.open("https://github.com/jessebubble")}></IconButton>
                <IconButton ml={2} icon={<FaGithub />} isRound='true' 
                    onClick={() =>
                    window.open("https://github.com/avc0021")}></IconButton>
                <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
            </Flex>
        </VStack>
    );
}

export default Nav;