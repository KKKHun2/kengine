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
  position: fixed;
  width: 100%;
  height: 4rem;
  top: 0;
  font-size: 14px;
  background-color: ${props => props.theme.color.header};
  color: ${props => props.theme.color.text};
  z-index: 100;
`;

const LogoBox = styled.div`
  margin-right: 50px;
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.color.text};
  &:hover {
    color: #8f88d7;
  }
  @media (max-width: 900px) {
    text-align: center;
    margin: 0 auto;
    display: block;
    font-size:30px;
    padding-left: 85px;
    margin-bottom: 5px;
    &:hover {
      color: ${props => props.theme.color.text};
    };
  }
`;

const Nav = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  margin: 0;
  align-items: center;
  margin-left:10px;
  width: 60%;
  @media (max-width: 900px) {
    display: none;
  }
`;

const NavItem = styled.li`
  text-decoration: none;
  color: ${props => props.theme.color.text};
  font-size: 1rem;
  font-weight: 400;
   margin-right: 40px;
  color: ${props => props.theme.color.text};;
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-weight: 700;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: #8f88d7;
  }
`;

const DarkModeButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s ease;
  background-color: ${props => props.theme.color.background};
  color: ${props => props.theme.color.text};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3.1rem;
  right: 20px;
  top: 50%;
  font-size: 12px;
  margin-right:50px;
  &:hover {
    background-color: ${props => props.theme.color.background};
    color: #8f88d7;
  }
  @media (max-width: 900px) {
    margin-left: 30px;
    margin-right:50px;
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
        <Link to="/side5">
          OS로서의 K엔진 {side5 && <UnderBar layoutId="underbar" />}
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/side2">
          사업의 전개 {side2 && <UnderBar short layoutId="underbar" />}
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/side3">
          시사회 {side3 && <UnderBar short layoutId="underbar" />}
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/side4">
          국제입찰{side4 && <UnderBar short layoutId="underbar" />}
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
