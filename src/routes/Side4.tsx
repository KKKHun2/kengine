import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  background-color: ${props => props.theme.color.background};
  color: ${props => props.theme.color.text};
  padding: 50px;
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  width: 100%;
  box-sizing: border-box;
`;

const Container = styled.div`
  width: 70%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px ${props => props.theme.color.background};
  box-sizing: border-box;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 25px 10px;
  width: 100%;
  @media (max-width: 900px) {
    text-align: center;
    margin-top: 45px;
    min-width: 30%;
  }
`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  @media (max-width: 844px) {
    flex-direction: column;
  }
`;

const List = styled.ul`
  flex-basis: calc(25% - 20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: ${props => props.theme.color.neutral};
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  list-style: none;
  margin-right: 20px;
  flex-grow: 1;
  height: 22rem;
  @media (max-width: 844px) {
    display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  }
  .tit {
    font-size: 1.4rem;
    font-weight: 400;
    /* 원하는 스타일을 추가하세요 */
  }
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: left;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
`;

const TitleButton = styled.div`
  background-color: #6354bb;
  color: #fff;
  border-radius: 10px;
  height: 30px;
  width: 80px;
  margin: 0 10px 0 0;
  font-size: 15px;
  font-weight: 400;
  padding: 10px 10px;
  display: flex; 
  justify-content: center; 
  align-items: center;
`;


const SubTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 2px solid #6354bb;
  color: #fff;
  border-radius: 10px;
  height: 40px;
  width: 100px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: #6354bb;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const Styled = styled.div`
  display: flex;
  flex-direction: column; /* 기본적으로 모바일에서 세로로 배치되도록 설정 */
  align-items: center; /* 가운데 정렬 */
  width: 100%;
  @media (min-width: 844px) {
    flex-direction: row; /* 화면 너비가 768px 이상일 때 가로로 배치되도록 변경 */
    justify-content: center; /* 가로 정렬 */
    align-items: center; /* 가운데 정렬 */
    margin-top: 30px;
  }
`;
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 3px solid #6354bb;
  color: #fff;
  border-radius: 10px;
  height: 70px;
  width: 250px;
  font-size: 16px;
  font-weight: 600;
  color: #6354bb;
  cursor: pointer;
  margin: 25px auto; /* 수직, 수평 가운데 정렬을 위해 수정 */
  &:hover {
    background-color: ${props => props.theme.color.background};
    color: #8f88d7;
  }
`;


const Side4: React.FC = () => {
  return (
    <>
      <Overlay>
        <Container>
          <Title className="title">국제 입찰 방식</Title>
          <ButtonContainer>
            <TitleButton>시간</TitleButton><br /> 2023.10.24 (목) 14:00 <br />
          </ButtonContainer>
          <ButtonContainer>
            <TitleButton>장소</TitleButton><br /> 주식회사 K엔진 회의실(주소 확정시 추후 공지함)
          </ButtonContainer>
          <Box>
            <List>
              <ListItem><Image src="./image/page4_1_icon.png" alt="Icon" /></ListItem>
              <ListItem className="tit">입찰자격</ListItem>
              <ListItem>
                국내외 상장사<br />
                국내외 펀드<br />
                국내 공기업<br />
                대한민국 정부
              </ListItem>
            </List>
            <List>
              <ListItem><Image src="./image/page4_2_icon.png" alt="Icon" /></ListItem>
              <ListItem className="tit">입찰대상</ListItem>
              <ListItem>주식회사 K엔진 지분 25%</ListItem>
            </List>
            <List>
              <ListItem><Image src="./image/page4_3_icon.png" alt="Icon" /></ListItem>
              <ListItem className="tit">최저 입찰가격</ListItem>
              <ListItem>1,000억 원</ListItem>
            </List>
            <List>
              <ListItem><Image src="./image/page4_4_icon.png" alt="Icon" /></ListItem>
              <ListItem className="tit">입찰보증금</ListItem>
              <ListItem>
                실제 응찰가에 관계없이<br />
                100억원으로 특정됨
              </ListItem>
            </List>
          </Box>
          <Title className="title">입찰방식</Title>
          <ButtonContainer>
            <SubTitle>의향서 제출</SubTitle> <br />
            <div>
            1. 2023.11.22. 18:00 까지 입찰참가 의향서 제출<br />
            2. 의향서 제출시 위 시각까지 1억원을 주식회사 K엔진 계좌에 입금<br /> <br />
            </div>
          </ButtonContainer>
          <ButtonContainer>
            <SubTitle>입찰당일</SubTitle><br />
            1. 2023.11.24. 14:00 부터 입찰함에 입찰표 투찰<br />
            2. 2023.14:30 입찰마감 개찰실시 최고가 입찰자 낙찰<br />
            3. 낙찰자 선언 후 10분 이내로 입찰보증금 잔금 99억원을 상기 계좌에 입금<br />
            4. 미납시 만약 차순위자가 있는 경우 차순위자에게 자동으로 낙찰자의 지위 이전됨. 차순위자 역시 낙찰자 선언 후 10분 이내에 입찰보증금 잔금 99억원을 상기 계좌에 납입하여야 함<br />
            5. 낙찰받지 못한 차순위자들에 대한 보증금 즉시 환급<br /> <br />
          </ButtonContainer>
          <ButtonContainer>
            <SubTitle>최종잔금납부</SubTitle><br />
            - 2023.12.22. 18:00까지 잔금(응찰가 - 100억원)을 상기 계좌에 입금과 동시에 지분 25% 이전함(주식양도계약 실행)
          </ButtonContainer>
          <Title className="title">보증금의 미반환</Title>
          <ButtonContainer>
            1. 의향서의 제출과 동시에 납입된 의향서 보증금은 해당 납입자가 입찰에 유효하게 참여하지 않은 경우 또는 입찰 당일 낙찰자로서 99억원을 납입하지 않은 경우 몰수됨.<br />
            2. 최종잔금납부일까지 잔금을 납부하지 않은 낙찰자는 기납부한 100억원을 몰수당함.
          </ButtonContainer>
          <Styled>
            <StyledButton>입찰의향서</StyledButton>
            <StyledButton>입찰표</StyledButton>
            </Styled>
        </Container>
      </Overlay>
    </>
  );
}

export default Side4;
