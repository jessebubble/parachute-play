import React from 'react';
import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Flex, VStack, Heading, Spacer } from '@chakra-ui/layout';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Image } from '@chakra-ui/image';

import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';


function Nav() {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
      };

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    return (
        <VStack p={5}>
            <Flex w='100%'>
                <Heading
                    ml='8' size='md' fontweight='semibold' color='cyan.400'>
                </Heading>
                <Spacer></Spacer>
                <Image
                    ml={2}
                    borderRadius='full'
                    boxSize='39px'
                    src='https://media-exp1.licdn.com/dms/image/C4E03AQFUIV-XQxTrHg/profile-displayphoto-shrink_800_800/0/1645586933825?e=1654732800&v=beta&t=6iLz6p-_lcr3j3g3aFBDXeUhCqb7UYqhrAW7upJiJX8'
                    alt='profile pic jesse'
                    onClick={() =>
                    window.open("https://github.com/jessebubble")} />
                <Image
                    ml={2}
                    borderRadius='full'
                    boxSize='39px'
                    src='https://ca.slack-edge.com/T02GXRVP58D-U02HW6NHXTP-6f10994cffea-512'
                    alt='profile pic adam'
                    onClick={() =>
                    window.open("https://github.com/avc0021")} />
                <Image
                    ml={2}
                    borderRadius='full'
                    boxSize='39px'
                    src='https://ca.slack-edge.com/T02GXRVP58D-U02K1TVPU56-c0e2daf38bff-512'
                    alt='profile pic mike'
                    onClick={() =>
                    window.open("https://github.com/mikebashford")} />
                <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
                {Auth.loggedIn() ? (
            <>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
            </Flex>
        </VStack>
    );
}

export default Nav;