import React from 'react';
import styled from 'styled-components';
import { SiNaver } from 'react-icons/si';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.div`
  background-color: ${props => props.theme.color.header};
  color: ${(props) => props.theme.color.text};
  padding: 10px 0;
  text-align: center;
  width: 100%;
  height:5rem;
  @media (max-width: 900px) {
    height:8rem;
  }
`;

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column; 
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  text-align: left;
  font-size: 0.8rem;
  line-height: 1.1rem;
  flex-shrink: 0; 
  margin-left:100px;
  margin-top:10px;
  @media (max-width: 900px) {
    text-align: center;
    font-size: 0.2rem; 
    margin-left:0px;
  }
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  @media (max-width: 900px) {
    align-items: center; 
    text-align:left;
    margin-left:30px;
  }
`;

const StyledButton = styled.button`
  text-decoration: none;
  display: inline-block;
  padding: 8px 10px;
  color: #fff;
  transition: background-color 0.2s ease, color 0.2s ease;
  font-size: 0.8rem; 
  font-weight: 400;
  background-color: #269601;
  border: 3px solid #218400;
  border-radius: 8px;
  display: flex; 
  align-items: center; 
  justify-content: center;
  margin-top:10px;
  &:hover {
    background-color: ${props => props.theme.color.background};
    color: #8f88d7;
  }
  @media (max-width: 900px) {
    display: none; 
  }
`;

const Logo = styled.div`
  text-decoration: none;
  font-size: 18px; 
  font-weight: bold;
  margin-top:10px;
  margin-right: 20px; 
  @media (max-width: 900px) {
    margin-right: 0; 
    margin-bottom: 5px; 
  }
`;

const NaverIcon = styled(SiNaver)`
  margin-right: 2px;
  font-size: 15px;
`;


const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <Logo>KENGINE</Logo>
        <TextContainer>
          <TextColumn>
            주식회사 에이아이 옥션 <br />
            대표자: 박종배 | 사업자 번호: 254-81-00931<br />
          </TextColumn>
          <TextColumn>
            kob8319@naver.com,  
            010-5762-5154<br />
            Copyright Kengine ©2023 All rights reserved
          </TextColumn>
        </TextContainer>
        <StyledButton as={Link} to="https://cafe.naver.com/gotificial">
          <NaverIcon />
          게시판 바로가기
        </StyledButton>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
