'use client';
import React, { useState, useEffect, use } from 'react';
import { motion, useAnimation } from 'framer-motion';
const Nav = ['About', 'About', 'About'];
function StickyNav() {
  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShow, setShouldShow] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;

      setShouldShow(isScrollingUp);
      setLastYPos(yPos);
    };

    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, [lastYPos]);

  useEffect(() => {
    if (shouldShow) {
      controls.start({ top: '0px' });
    } else {
      controls.start({ top: '-100px' }); // Adjust '-100px' based on the actual height of your nav bar
    }
  }, [shouldShow, controls]);
  return (
    <motion.header
      className="w-full p-8  shadow "
      initial={{ top: '0px' }}
      animate={controls}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{
        position: 'sticky',
        top: '0px',
        zIndex: 10,
        background: 'white',
      }}>
      <nav>
        <nav>
          <ul className="flex gap-8 ">
            {Nav.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </nav>
      </nav>
    </motion.header>
  );
}

export default StickyNav;
