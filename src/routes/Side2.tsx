import React, { useContext } from 'react';
import styled from 'styled-components';
import { DarkMode } from '../DarkMode';

const Overlay = styled.div`
  background-color: ${props => props.theme.color.background};
  color: ${props => props.theme.color.text};
  padding: 50px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top:30px;
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
  margin-bottom: 20px;
  box-sizing: border-box; /* padding과 border를 요소의 크기에 포함시킵니다. */

  @media (max-width: 768px) {
    width: 90%; /* 화면이 작을 때 더 많은 여백을 주려면 가로 길이를 조절하세요. */
  }
`;


const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 25px 10px;
  width: 100%;
  @media (max-width: 844px) {
    text-align: center; 
    min-width: 30%;/* 가운데로 정렬하고, 왼쪽 여백을 0으로 설정 */
  }
`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  @media (max-width: 904px) {
    flex-direction: column;
  }
`;

const List = styled.ul`
  flex-basis: calc(50% - 40px); /* 초기 크기 설정 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: ${props => props.theme.color.neutral};
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  list-style: none;
  margin-right: 20px;
  flex-grow: 1;
  height: 22rem; 
  flex-grow: 1;
  @media (max-width: 844px) {
    flex-basis: calc(100% - 20px);
    margin-right: 0;
  }
  
`;


const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;


const Side2: React.FC = () => {
    const { isDark } = useContext(DarkMode);
  return (
    <Overlay className="page02_1">
        <Container>
      <Title className="title">라이선스 제도</Title>
      <Box className="box">
        <List>
          <ListItem>
            {!isDark ? 
            <Image src="./image/page2_1_icon.png" alt="Icon 1" /> :
            <Image src="./image/page2_1_darkicon.png" alt="Icon 1" />}
            
          </ListItem>
          <ListItem className="tit">1,000개의 분야별 라이선스</ListItem>
          <ListItem>
            필자는 K엔진을 지주회사로 하여 일단 1,000개의 법인을 설립하고 이들 모두를 나스닥이나 코스닥에 상장시킬 계획이다. 개별적으로 라이선스를 부여하여 라이선스 갱신을 바탕으로 하는 경쟁을 유도할 계획이다.
          </ListItem>
        </List>
        <List>
          <ListItem>
          {!isDark ? 
            <Image src="./image/page2_2_icon.png" alt="Icon 2" /> :
            <Image src="./image/page2_2_darkicon.png" alt="Icon 2" />}
          </ListItem>
          <ListItem className="tit">2년마다 갱신</ListItem>
          <ListItem>
            라이선스를 받은 기업이 게으름을 노정한다면 재계약을 해 주지 않고 다른 경쟁 희망기업에 라이선스를 부여하게 된다
          </ListItem>
        </List>
        <List>
          <ListItem>
          {!isDark ? 
            <Image src="./image/page2_3_icon.png" alt="Icon 1" /> :
            <Image src="./image/page2_3_darkicon.png" alt="Icon 1" />}
          </ListItem>
          <ListItem className="tit">1,000개의 법인과 상장</ListItem>
          <ListItem>
            각 법인에서 데이터 구축비용 부담<br />
            K엔진의 기초데이터의 입력은 1분야당 10억원 정도로 여겨진다. 1,000개 기업이라면 1조원 정도가 소요되게 된다. 필자는 이를 직접 실시할 생각은 없지만 적어도 라이센스를 바탕으로 지배권은 행사할 생각이다.
          </ListItem>
        </List>
        <List>
          <ListItem>
          {!isDark ? 
            <Image src="./image/page2_4_icon.png" alt="Icon 4" /> :
            <Image src="./image/page2_4_darkicon.png" alt="Icon 4" />}
          </ListItem>
          <ListItem className="tit">1,000,000개의 일자리 창출</ListItem>
          <ListItem>
            시간이 흐를수록 분야는 확장되고 세분화될 것이다. 대략 100,000개 정도의 분야로 세분화될 것으로 예상된다. 내가 태어난 이 나라 한국 정부의 입장에서 본다면 한 분야당 평균적으로 10명씩만 고용창출이 이루어진다면 총 1,000,000개의 일자리가 창출될 것이며 이 때 대한민국의 1인당 GDP는 세계 최고가 될 것으로 예상된다. 국가 GDP 마저도 최고가 될 수 있지 않을까 하는 추측도 해 본다.
          </ListItem>
        </List>
      </Box>
      </Container>
    </Overlay>
  );
}

export default Side2;
