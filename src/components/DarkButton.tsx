import React, { useContext } from 'react'
import styled from 'styled-components';
import { DarkMode } from '../DarkMode';
import { HiOutlineMoon} from 'react-icons/hi';
import { PiSun } from 'react-icons/pi';

const DarkMButton = styled.button`
  padding: 10px;
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
  width: 5rem;
  height: 5rem;
  background-color: ${props => props.theme.isDark === false ? '#999' : '#5f5100' }; 
  z-index: 9989;
  &:hover {
    background-color: ${props => props.theme.isDark === false ?  '#555':'#FFD700' };
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
`;

const DarkButton = () => {
  const { handleChangeDarkMode, isDark } = useContext(DarkMode);

  return (
    <DarkMButton onClick={handleChangeDarkMode}>
      <Icon>{isDark ? <PiSun /> : <HiOutlineMoon />}</Icon>
    </DarkMButton>
  )
}

export default DarkButton;
