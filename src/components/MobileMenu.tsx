import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
margin-left :30px;
margin-right: 10px;
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 34px;
  margin-right: -30px;

  @media (max-width: 900px) {
    display: block;
    margin-left: -30px;
    margin-bottom:15px;
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
  margin-top:28px;
  font-size: 17px;
  font-weight: bold;
  text-decoration: none;
  color: ${(props) => props.theme.color.text};
  width:100%;
  padding:10px;
  border-top: 2px solid #fff; /* 상단 테두리 추가 */
  border-bottom: 2px solid #fff; /* 하단 테두리 추가 */
  &:hover {
    color: #8f88d7;
  }
`;


const ModalContainer = styled.div`
  display: none;
  position: fixed;
  top: 0;

  width: 100%;
  height: 100%;
  background-color: rgba(71, 71, 71, 0.4);
  z-index: 9999;
  &.open {
    display: block;
  }
`;

const ModalContent = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 65vw;
  background-color: ${(props) => props.theme.color.header};
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  transition: left 0.3s ease-in-out;
  &.open {
    left: 0;
  }
  display: flex;
  flex-direction: column; /* 세로로 쌓이도록 설정 */
  justify-content: space-between; /* 위 아래 여백 추가 */
  padding: 40px; /* 내부 여백 추가 */
  
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
  &:hover {
    color: #8f88d7;
  }
`;

const ExternalLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  color: ${props => props.theme.color.text};
  padding: 10px 20px;
  margin-right: 1rem;
  margin-top:3rem;
  cursor: pointer;
  background-color: #6354bb;
  border: 3px solid #6354bb;
  border-radius: 8px;
  &:hover {
    background-color: ${props => props.theme.color.background};
    color: #8f88d7;
  }
  transition: background-color 0.2s, color 0.2s;
  &:hover {
    background-color: ${props => props.theme.color.background};
    color: #8f88d7;
  }

`;

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
      <ModalContainer className={isMenuOpen ? 'open' : ''} onClick={closeMenu}>
        <ModalContent className={isMenuOpen ? 'open' : ''}>
          <CloseButton onClick={closeMenu}>&times;</CloseButton>
          <MenuItems>
          <ExternalLink href="http://kengine.filmasfilm.com/" target="_blank" rel="noreferrer">
                 Kengine OS 채팅웹으로 바로가기
              </ExternalLink>
            <MenuItem>
              <Link to="/side1">K엔진의 원리</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/side5">OS로서의 K엔진</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/side2">사업의 전개</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/side3">시사회</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/side4">국제입찰</Link>
            </MenuItem>
  
              
  
          </MenuItems>
        </ModalContent>
      </ModalContainer>
    </>
  );
};

export default MobileMenu;
