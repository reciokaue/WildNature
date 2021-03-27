import React from 'react';

import { Container, SearchIcon } from './styles';
import { motion } from 'framer-motion'

const Navbar: React.FC = () => {
  const links = ['Species', 'Locations', 'About', 'Donate']
  return (
    <Container>
      <motion.div
         initial={{y: -44, opacity: 0}}
         animate={{y: 0, opacity: 1}}
         transition={{delay: .5, duration: .8, type: 'spring', stiffness: 120}}
      >
      <h1><span>Wild</span>Nature</h1>

      <div>
        {links.map((title) => (
          <motion.span
            whileHover={{scale: 1.1, color: 'var(--primary)'}}
          >{title}</motion.span>
        ))}
        
        <div>
          <input type="text" placeholder="type something"/>
          <SearchIcon/>
        </div>
      </div>
      </motion.div>
     
    </Container>
  );
};

export default Navbar;
