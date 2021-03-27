import React from 'react';
import Navbar from '../Navbar';

import { Container, Presentation, PlayIcon, SpecieCharacteristics, Point, Lections } from './styles';
import focus from '../../map/focus.svg'
import inside from '../../map/inside.svg'
import outline from '../../map/outline.svg'
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion'

const Content: React.FC = () => {
  return (
    <Container>
      <Navbar/>
      <Presentation>
        <motion.h2
          initial={{y: -150, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{delay: 0.5, duration: 1, type: 'spring'}}
        >Species of america</motion.h2>
        <motion.h1
         initial={{y: -150, opacity: 0}}
         animate={{y: 0, opacity: 1}}
         transition={{delay: 0.5, duration: 1.3, type: 'spring'}}
        >Brown Bear</motion.h1>
        <motion.p
           initial={{x: -500}}
           animate={{x: 0}}
           transition={{delay: 0.5, duration: .7, type: 'spring'}}
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda sunt aperiam perspiciatis voluptate quos necessitatibus tenetur iste quo dicta harum.</motion.p>

        <motion.div
          initial={{x: -500}}
          animate={{x: 0}}
          transition={{delay: 0.5, duration: .7, type: 'spring'}}
        >
          <motion.button
           initial={{x: -500}}
           animate={{x: 0}}
           transition={{delay: 0.5, duration: .3, type: 'spring'}}
          >
            <PlayIcon/>
          </motion.button>
          Watch video
          <span>More info</span>
        </motion.div>
      </Presentation>

      <SpecieCharacteristics>
        <motion.div
          initial={{y: 160}}
          animate={{y: 0}}
          transition={{delay: .5, duration: .8, type: 'spring', stiffness: 120}}
        >
          <h1>Territory of habitat</h1>
          <img src={outline} alt=""/>
          <img src={inside} alt=""/>
          <img src={focus} alt=""/>

        </motion.div>
        <motion.div
           initial={{y: 160}}
           animate={{y: 0}}
           transition={{delay: .6, duration: .8, type: 'spring', stiffness: 120}}
        >
          <h1>Trinominal Name</h1>
          <p>Ursus arctos</p>

          <h1>Conservation status</h1>
          <div>
            <Point>EX</Point>
            <Point>EW</Point>
            <Point>CR</Point>
            <Point>EN</Point>
            <Point>EX</Point>
            <Point>VU</Point>
            <Point>NT</Point>
            <Point className="marked">LC</Point>
          </div>
        </motion.div>
      </SpecieCharacteristics>

      <Lections>
        <motion.div
           initial={{y: 160, opacity: 0}}
           animate={{y: 0, opacity: 1}}
           transition={{delay: .5, duration: .8, type: 'spring', stiffness: 120}}
        >
          <h1>Lections</h1>
          <p>Miragtion patterns of Brown Bears
          </p>
          <motion.span
            animate={{x: 15}}
            transition={{delay: 1, yoyo: Infinity, duration: .7}}
          >
            <BsArrowRight size="27" color="var(--primary)"/>
          </motion.span>
        </motion.div>

        <motion.div
           initial={{x: '100%'}}
           animate={{x: 0}}
           transition={{delay: .5, duration: .8, type: 'spring', stiffness: 120}}
        >
          <PlayIcon/>
        </motion.div>
      </Lections>
    </Container>
  );
};

export default Content;
