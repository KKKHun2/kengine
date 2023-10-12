import React, { useContext } from 'react'
import styled from 'styled-components';
import { DarkMode } from '../DarkMode';
import { HiOutlineMoon} from 'react-icons/hi';
import { PiSun } from 'react-icons/pi';

const DarkMButton = styled.button`
  border: none;
  position: fixed; 
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 25px;
  bottom: 100px; 
  width: 4.5rem;
  height: 4.5rem;
  background-color: ${props => props.theme.isDark === true ?  '#555':'#FFD700' };
  color: #fff;
  z-index: 9989;
  &:hover {
    background-color: ${props => props.theme.isDark === true ?  '#807f7f':'#a48d0b' };
    color: ${props => props.theme.color.text};
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

// 임시 아이콘 디자인 나오면 아이콘 png나 기타로 변경
const Icon = styled.div`
  font-size: 35px; 
  color: ${props => props.theme.color.text};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DarkButton = () => {
  const { handleChangeDarkMode, isDark } = useContext(DarkMode);

  return (
    <DarkMButton onClick={handleChangeDarkMode}>
     <Icon>{isDark ? <HiOutlineMoon /> : <PiSun /> }</Icon>
    </DarkMButton>
  )
}

export default DarkButton;
