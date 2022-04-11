import React from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Stack, Box} from '@chakra-ui/layout';
import MonsterTwo from '../images/monster2.svg';
import MonsterThree from '../images/monster3.svg';
import MonsterFour from '../images/monster4.svg';
import MonsterSix from '../images/pgreen.svg';
import MonsterSeven from '../images/pteal.svg';
import MonsterNine from '../images/porange.svg';


const Image = styled(motion.img)`
    max-width: 250px;
    max-height: 110px;
    `; 

function Monsters () {

    return (
        <Stack> 
            <Box p={12} display='flex' justifyContent='right'>
                <Image
                src={MonsterNine}
                alt='monster'
                whileTap={{ scale: 0.8 }}
                drag={true}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                />
                <Image
                src={MonsterSix}
                alt='monster'
                whileTap={{ scale: 0.8 }}
                drag={true}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                />
                <Image
                src={MonsterTwo}
                alt='monster'
                whileTap={{ scale: 0.8 }}
                drag={true}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                />
                <Image
                src={MonsterThree}
                alt='monster'
                whileTap={{ scale: 0.8 }}
                drag={true}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                />
                <Image
                src={MonsterSeven}
                alt='monster'
                whileTap={{ scale: 0.8 }}
                drag={true}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                />
                <Image
                src={MonsterFour}
                alt='monster'
                whileTap={{ scale: 0.8 }}
                drag={true}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                />
            </Box>
        </Stack>

 /*        <VStack spacing='24px'>
            <Container>
            <Box w='40px' h='40px'>
                <Image
                src={MonsterThree}
                alt='monster'
                whileTap={{ scale: 0.9 }}
                drag={true}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                />
                <Image
                src={MonsterSix}
                alt='monster'
                whileTap={{ scale: 0.9 }}
                drag={true}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                />
                <Image
                src={MonsterSeven}
                alt='monster'
                whileTap={{ scale: 0.9 }}
                drag={true}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                /> 
                <Image
                src={MonsterTwo}
                alt='monster'
                whileTap={{ scale: 0.9 }}
                drag={true}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                />
                <Image
                src={MonsterSix}
                alt='monster'
                whileTap={{ scale: 0.9 }}
                drag={true}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                />
                <Image
                src={MonsterFour}
                alt='monster'
                whileTap={{ scale: 0.9 }}
                drag={true}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                />
            </Box>
            </Container>
        </VStack> */

    );
}
export default Monsters;