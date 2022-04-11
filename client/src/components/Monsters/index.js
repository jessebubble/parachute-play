import React from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MonsterOne from '../images/monster.svg';
import MonsterTwo from '../images/monster2.svg';
import MonsterThree from '../images/monster3.svg';
import MonsterFour from '../images/monster4.svg';
import MonsterFive from '../images/parachute.svg';
import MonsterSix from '../images/pgreen.svg';
import MonsterSeven from '../images/pteal.svg';
import MonsterEight from '../images/pblack.svg';
import MonsterNine from '../images/porange.svg';
import MonsterTen from '../images/pred.svg';




const Image = styled(motion.img)`
    max-width: 300px;
    max-height: 150px;
    `; 
const Column = styled.div`
    display: flex;
    flex-wrap: wrap;
    height:400px
    align-content: space-between;
    padding: 5rem;
`;

function Monsters () {

    return (
                <Column>
                    <Image
                    src={MonsterOne}
                    alt='monster'
                    whileTap={{ scale: 0.8 }}
                    drag={true}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
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
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    />
                    <Image
                    src={MonsterFour}
                    alt='monster'
                    whileTap={{ scale: 0.8 }}
                    drag={true}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    />
                    <Image
                    src={MonsterFive}
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
                    src={MonsterEight}
                    alt='monster'
                    whileTap={{ scale: 0.9 }}
                    drag={true}
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    />
                    <Image
                    src={MonsterNine}
                    alt='monster'
                    whileTap={{ scale: 0.9 }}
                    drag={true}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    />
                    <Image
                    src={MonsterTen}
                    alt='monster'
                    whileTap={{ scale: 0.9 }}
                    drag={true}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    />
                </Column>
    );
}
export default Monsters;