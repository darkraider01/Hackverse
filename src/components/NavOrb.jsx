import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const Orb = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: radial-gradient(circle, #00ffcc, #ff00cc);
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.3s;
  box-shadow: 0 0 20px rgba(0, 255, 204, 0.5);
`;

const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  z-index: 9;
`;

const MenuItem = styled.a`
  font-size: 2rem;
  color: #00ffcc;
  margin: 1rem;
  text-decoration: none;
  opacity: 0;
  transform: translateY(20px);
  transition: color 0.3s;
  &:hover {
    color: #ff00cc;
  }
`;

function NavOrb() {
  const orbRef = useRef(null);
  const menuRef = useRef(null);
  const itemRefs = useRef([]);

  const toggleMenu = () => {
    const isOpen = menuRef.current.style.pointerEvents === 'auto';
    gsap.to(menuRef.current, {
      opacity: isOpen ? 0 : 1,
      duration: 0.5,
      ease: 'power3.out',
      onComplete: () => {
        menuRef.current.style.pointerEvents = isOpen ? 'none' : 'auto';
      },
    });
    itemRefs.current.forEach((item, index) => {
      gsap.to(item, {
        opacity: isOpen ? 0 : 1,
        y: isOpen ? 20 : 0,
        duration: 0.5,
        delay: index * 0.1,
        ease: 'power3.out',
      });
    });
    gsap.to(orbRef.current, {
      scale: isOpen ? 1 : 1.5,
      duration: 0.3,
    });
  };

  const handleNav = (section) => {
    gsap.to(window, {
      scrollTo: document.querySelector(section).offsetTop,
      duration: 1,
      ease: 'power3.out',
    });
    toggleMenu();
  };

  return (
    <>
      <Orb ref={orbRef} onClick={toggleMenu} aria-label="Open navigation" />
      <Menu ref={menuRef}>
        {['#hero', '#about', '#schedule', '#prizes', '#sponsors', '#teams', '#register', '#gallery'].map((section, index) => (
          <MenuItem
            key={index}
            href={section}
            ref={(el) => (itemRefs.current[index] = el)}
            onClick={(e) => {
              e.preventDefault();
              handleNav(section);
            }}
            aria-label={`Navigate to ${section.slice(1)}`}
          >
            {section.slice(1).charAt(0).toUpperCase() + section.slice(2)}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default NavOrb;