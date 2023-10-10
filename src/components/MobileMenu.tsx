import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Container = styled.div`
  margin: 0px 10px 5px 50px;
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 40px;
  &:hover {
    color: #8f88d7;
  }
  @media (max-width: 900px) {
    display: block;
    margin-left: -18px;
    margin-right: 5px;
  }
`;

const MenuItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:hover {
    color: #8f88d7;
  }
  @media (min-width: 900px) {
    display: none;
  }
 
`;

const MenuItem = styled.li`
  margin-top: 28px;
  font-size: 19px;
  z-index: 9999;
  font-weight: bold;
  text-decoration: none;
  color: ${(props) => props.theme.color.text};
  width: 380px;
  padding: 10px;
  border-top: 2px solid ${(props) => props.theme.color.text};
  transition: color 0.2s, transform 0.2s;
  &:hover {
    color: #8f88d7;
    transform: scale(1.1);
  }
  @media (max-width: 650px) {
    width: 180px;
  }
`;

const ModalContainer = styled.div`
  display: none;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  &.open {
    display: block;
  }
`;

const ModalContent = styled(motion.div)`
  position: fixed;
  top: 0;
  height: 100%;
  width: 65vw;
  background-color: ${(props) => props.theme.color.header};
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);

  &.open {
    left: 0;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;

`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  font-size: 40px;
  color: ${(props) => props.theme.color.text};
  transition: color 0.2s, transform 0.2s;
  &:hover {
    color: #8f88d7;
    transform: scale(1.5);
  }
`;
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
   width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.45);
  opacity: 0;
  z-index: 9990;
`;

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const menuVariants = {
    open: { 
      x: 0, 
      transition: { duration: 0.3, ease: "easeOut" }
    },
    closed: { 
      x: '-100%', 
      transition: { duration: 0.3, ease: "easeIn" } 
    },
  };

  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Container>
        <MenuIcon onClick={openMenu}>&#9776;</MenuIcon>
      </Container>
      {isMenuOpen && (
         <Overlay
         onClick={closeMenu}
         exit={{ opacity: 0 }}
         animate={{ opacity: 1 }}
       />
      )}
      <AnimatePresence>
        {isMenuOpen && (
          <ModalContainer
          variants={menuVariants}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          exit="closed"
          className={isMenuOpen ? "open" : ""}
          onClick={closeMenu}
          as={motion.div}
        >
            <ModalContent
               initial="closed"
               animate={isMenuOpen ? "open" : "closed"}
               exit="closed"
               variants={menuVariants}
               className={isMenuOpen ? "open" : ""}
               onClick={closeMenu}
            >
              <CloseButton onClick={closeMenu}>&times;</CloseButton>
              <MenuItems>
               <Link to="/side1">
                 <MenuItem>
                  K엔진의 원리
                 </MenuItem>
                </Link>
                <Link to="/side2">
                 <MenuItem>
                  OS로서의 K엔진
                  </MenuItem>
                </Link>
                <Link to="/side3">
                 <MenuItem>
                 사업의 전개
                 </MenuItem>
                </Link>
              <Link to="/side4"> 
                <MenuItem>
                시사회
                </MenuItem>
              </Link> 
              <Link to="/side5">
                <MenuItem>
                  국제입찰
                </MenuItem>
              </Link>
              </MenuItems>
            </ModalContent>
          </ModalContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
