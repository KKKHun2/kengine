//맨위에 헤더

import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link, useMatch } from 'react-router-dom';
import { DarkMode } from '../DarkMode';
import MobileMenu from './MobileMenu';
import { motion } from "framer-motion";

interface IUnderBarProps {
  short?: boolean; 
}
const HeaderWrapper = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
 
  width: 100%;
  height: 4rem;
  font-size: 14px;
  background-color: ${props => props.theme.color.header};
  color: ${props => props.theme.color.text};
  z-index: 100;
  @media (max-width: 900px) {
    position: fixed;
  top: 0;
  }

`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  @media (max-width: 900px) {
    margin-left: 50px;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.color.text};
  margin-left: 10px;
  &:hover {
    color: #8f88d7;
  }
  @media (max-width: 900px) {
    text-align: center;
    margin: 0 auto;
    display: block;
    font-size: 30px;
    margin-left: 0;
    margin-bottom: 5px;
    &:hover {
      color: ${props => props.theme.color.text};
    }
  }
`;

const Nav = styled.ul`
  list-style: none;
  display: flex;
  width: 60%;
  margin: 0 auto; 
  @media (max-width: 900px) {
    display: none;
  }
  @media (min-width: 1800px) {
    align-items: left;
    width: 40%;
  }
`;

const NavItem = styled.li`
  text-decoration: none;
  color: ${props => props.theme.color.text};
  font-size: 1rem;
  font-weight: 400;
  flex: 1; 
  color: ${props => props.theme.color.text};
  position: relative;
  display: flex;
  justify-content: flex-start;
  font-weight: 700;
  transition: color 0.2s, transform 0.2s;
  &:hover {
    color: #8f88d7;
    transform: scale(1.1);
  }
`;

const DarkModeButton = styled.button`
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s ease;
  display: none;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.isDark === false ? '#FFD700' : '#999'}; 
  color: ${props => props.theme.color.text};
  z-index:9989;
  &:hover {
    background-color: ${props => props.theme.isDark === false ? '#bba004' : '#555'};
    color: ${props => props.theme.color.text};; 
  }

  @media (max-width: 900px) {
    margin-top:1px;
    display: flex;
    margin-left: 30px;
    margin-right: 40px;
    width: 2.8rem;
    height: 2.8rem;
    font-size: 13px;
  }
  
`; 

const UnderBar = styled(motion.div)<IUnderBarProps>`
  position: absolute;
  margin-top:7px;
  height: 2px;
  border-radius: 5px;
  margin-left: -2px;
  background-color: ${props => props.theme.color.text};
  display: flex; 
  justify-content: center; 
  align-items: center;
  width: ${props => (props.short ? '50px' : '100px')};
`;

const HeaderNav = () => {

  const side1 = useMatch("/side1");
  const side2 = useMatch("/side2");
  const side3 = useMatch("/side3");
  const side4 = useMatch("/side4");
  const side5 = useMatch("/side5");

  return (
    <Nav>
      <NavItem>
        <Link to="/side1">
           K엔진의 원리 {side1?.pattern && <UnderBar layoutId="underbar" />}
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/side2">
          OS로서의 K엔진 {side2 && <UnderBar layoutId="underbar" />}
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/side3">
          사업의 전개 {side3 && <UnderBar  layoutId="underbar" />}
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/side4">
          시사회 {side4 && <UnderBar short layoutId="underbar" />}
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/side5">
          국제입찰{side5 && <UnderBar short layoutId="underbar" />}
        </Link>
      </NavItem>
    </Nav>
  );
};

const Header: React.FC = () => {
  const { handleChangeDarkMode, isDark } = useContext(DarkMode);

  return (
    <>
      <HeaderWrapper>
        <MobileMenu />
        <LogoBox>
          <Logo to="/">KENGINE</Logo>
        </LogoBox>
        <HeaderNav />
        <DarkModeButton onClick={handleChangeDarkMode}>
          {isDark ? 'DARK' : 'LIGHT'}
        </DarkModeButton>
      </HeaderWrapper>
    </>
  );
};

export default Header;
