import React from 'react';

import { Container, Logo, Scroll, ScrollDown, Arrow } from './styles';
import { motion } from 'framer-motion'

const SideBar: React.FC = () => {
  const scroll = [1, 2, 3, 4, 5, 6, 7]
  return (
    <Container>
      <motion.div
       initial={{x: -60}}
       animate={{x: 0}}
       transition={{delay: .5, duration: .8, type: 'spring', stiffness: 70}}
      >
      <Logo/>
      
      <Scroll>
        {scroll.map((item) =>(
          <motion.div key={item}
            whileHover={{scale: 1.6, opacity: 1}}
          />
        ))}
      </Scroll>

      <ScrollDown>
        <motion.div
          initial={{rotate: 90}}
          whileHover={{y: 20, rotate: 90}}
        >
          Scroll Dowm
          <Arrow/>
        </motion.div>
      </ScrollDown>
      </motion.div>
    </Container>
  );
};

export default SideBar;
