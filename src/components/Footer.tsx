import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  background-color: ${props => props.theme.color.header};
  color: ${(props) => props.theme.color.text};
  padding: 20px 0;
  text-align: center;
  width: 100%;
`;

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 844px) {
    flex-direction: column; /* 화면이 작아지면 세로로 배치합니다. */
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  text-align: left;
  font-size: 0.8rem;
  line-height: 1rem;
  flex-shrink: 0; /* 화면이 작아져도 줄어들지 않도록 고정합니다. */
  margin-left:30px;

  @media (max-width: 844px) {
    text-align: center; /* 화면이 작아지면 텍스트 중앙 정렬합니다. */
    font-size: 0.6rem; /* 글꼴 크기를 줄입니다. */
  }
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  @media (max-width: 844px) {
    align-items: center; /* 화면이 작아지면 텍스트 중앙 정렬합니다. */
    
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  display: inline-block;
  padding: 8px 10px;
  color: ${(props) => props.theme.color.text};
  border-radius: 5px;
  transition: background-color 0.2s ease, color 0.2s ease;
  font-size: 0.8rem; /* 글꼴 크기를 줄였습니다. */
  font-weight: 400;
  &:hover {
    background-color: ${props => props.theme.color.background};
    color: #8f88d7;
  }
  @media (max-width: 844px) {
    display: none; 
  }
`;

const Logo = styled.div`
  text-decoration: none;
  font-size: 18px; 
  font-weight: bold;
  margin-bottom: 10px; 
  margin-right: 20px; 
  @media (max-width: 844px) {
    margin-right: 0; 
    margin-bottom: 5px; 
  }
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
        <StyledLink target="_blank" href="https://cafe.naver.com/gotificial">
          게시판 바로가기
        </StyledLink>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
