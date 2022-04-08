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


const Section = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    `;
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    padding: 3rem calc((100vw-1300px) / 2);
    `;

const Image = styled(motion.img)`
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: 250px;
    `; 
const Column = styled.div`    
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7rem;
    position: relative;
    ${Image}:nth-child(1) {
      top: -30px;
      left: 320px;
    }
    ${Image}:nth-child(2) {
      top: 60px;
      right: -40px;
    }
    ${Image}:nth-child(3) {
      top: 40px;
      left: -250px;
    }
    ${Image}:nth-child(4) {
      bottom: 640px;
      right: -520px;
    }
    ${Image}:nth-child(5) {
      bottom: 1220px;
      right: -30px;
      max-width: 75px;
    }
    ${Image}:nth-child(6) {
      bottom: 1250px;
      right: 250px;
      max-width: 75px;
    }
    ${Image}:nth-child(7) {
      bottom: 1240px;
      right: 320px;
      max-width: 75px;
    }
    ${Image}:nth-child(8) {
      bottom: 1210px;
      right: 380px;
      max-width: 75px;
    }
    ${Image}:nth-child(9) {
      bottom: 1240px;
      right: 110px;
      max-width: 75px;
    }
    ${Image}:nth-child(10) {
      bottom: 1290px;
      right: 90px;
      max-width: 75px;
    }
`;

function Monsters () {

    return (
        <Section>
            <Container>
                <Column>
                    <Image
                    src={MonsterOne}
                    alt='monster'
                    whileTap={{ scale: 0.9 }}
                    drag={true}
                    dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    />
                    <Image
                    src={MonsterTwo}
                    alt='monster'
                    whileTap={{ scale: 0.6 }}
                    drag={true}
                    dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    />
                    <Image
                    src={MonsterThree}
                    alt='monster'
                    whileTap={{ scale: 0.8 }}
                    drag={true}
                    dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    />
                    <Image
                    src={MonsterFour}
                    alt='monster'
                    whileTap={{ scale: 0.9 }}
                    drag={true}
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    />
                    <Image
                    src={MonsterFive}
                    alt='monster'
                    whileTap={{ scale: 0.9 }}
                    drag={true}
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    />
                    <Image
                    src={MonsterSix}
                    alt='monster'
                    whileTap={{ scale: 0.9 }}
                    drag={true}
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    />
                    <Image
                    src={MonsterSeven}
                    alt='monster'
                    whileTap={{ scale: 0.9 }}
                    drag={true}
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    />
                    <Image
                    src={MonsterEight}
                    alt='monster'
                    whileTap={{ scale: 0.9 }}
                    drag={true}
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    />
                    <Image
                    src={MonsterNine}
                    alt='monster'
                    whileTap={{ scale: 0.9 }}
                    drag={true}
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    />
                    <Image
                    src={MonsterTen}
                    alt='monster'
                    whileTap={{ scale: 0.9 }}
                    drag={true}
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    />
                </Column>
            </Container>
        </Section>
    );
}

export default Monsters;