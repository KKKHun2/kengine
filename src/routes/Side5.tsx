import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  background-color: ${props => props.theme.color.background};
  color: ${props => props.theme.color.text};
  padding: 50px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 100%; /* 화면 가로 너비를 100%로 설정 */
  box-sizing: border-box; /* padding과 border를 요소의 크기에 포함시킵니다. */
`;

const Container = styled.div`
  width: 70%; /* 내부 컨텐츠의 최대 너비를 설정 */
  max-width: 1600px; /* 최대 너비 설정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px ${props => props.theme.color.background};
  margin-bottom: 20px;
  box-sizing: border-box; 

  @media (max-width: 768px) {
    width: 90%;
  }
`;


const PageSection = styled.div`
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  margin: 20px 0px 20px 0; 
  @media (max-width: 844px) {
    text-align: center;
  }
`;

const Paragraph = styled.p`
  color: ${props => props.theme.color.text};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  margin-top:1rem;
  font-size: 16px;
  font-weight: normal;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 20px;
`;

const PDFButton = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-size: 11px;
  color: ${props => props.theme.color.text};
  padding: 10px 10px;
  background-color: ${props => props.theme.color.header};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  @media (max-width: 844px) {
    display: flex; 
    margin: 10px 0px; 
    width: fit-content;
  }

  &:hover {
    color: #6354bb;
  }
`;
const Side5: React.FC = () => {
  return (
    <>
      <Overlay>
        <Container>
            <PageSection>
              <Title>OS로서의 K엔진</Title>
              <Paragraph>
              K엔진은 OS다. K엔진은 K엔진OS의 약자이다. K엔진은 챗봇이 아니다. GPT도 아니다. K엔진은 모든 인공지능의 OS다. 최초이자 종결자다. 결국 독점이며 이 세상의 모든 인공지능 그 외의 모든 앱들이 K엔진 상에 깔리게 된다. 왜냐하면 OS이니까. 그것은 너무도 당연한 이야기이므로.
      </Paragraph>
      <Paragraph>
      어떻게 해서 나오자마자 종결자가 될 수 있는가 의아해 할 수 있다. 지금까지 Mac, 윈도우, 리눅스 그 외 여러 다른 OS들이 등장했는데 왜 유독 K엔진만 혼자 독점이냐는 의문이 들지 않을 수 밖에 없다. 그 이유는 이러하다.
      </Paragraph>
      <Paragraph>
      첫째는 원리적인 측면에서 체계는 세계 공통이며 신과 인간을 통틀어서도 공통이다. 체계라는 것은 수천 수만년 전부터 인간과 나아가 신의 사유를 구동시키는 원리였다. 그 외의 다른 원리는 존재하지 않는다. 즉 체계관념은 단 하나 밖에 없다. 천지 창조 시에 만들어졌으며 그 이후로는 일체 변화가 없었다. 인간이나 신이나 똑같은 체계관념, 체계원리를 사용한다. 백만년 전이나 지금이나 앞으로 백만년 후에도 이는 마찬가지다. 일체 변화가 없다. 따라서 이 체계를 사용하는 가장 근본적인 방법을 개발하고 제시했다면 - 앞으로 백만년간 - 그 방법에는 변화가 있을 수 없다. 그것은 종결자가 될 수 밖에 없다.
      </Paragraph>
      <Paragraph>
      둘째, 사정이 이러하다면, 즉 그 체계를 범용컴퓨터에 구동시키는 방법을 특허출원했다면 그 출원자는 앞으로 백만년 동안 이 시장을 독점하게 된다. 특허에 의하여 20년간, 그 이후는 선점에 의하여 999,980년간 독점하게 된다.
      </Paragraph>
      <Paragraph>
      앞으로 OS는 두가지가 병존하게 된다. 하나는 기계적 OS이고 다른 하나는 지능적 OS이다. 윈도우나 Mac, 리눅스 같은 것은 기계적 OS이다. 어제까지 모든 앱들이 이들 OS와 기계신호로 직접 교신했다. 이것이 바로 지금의 컴퓨터 환경이다.
      </Paragraph>
      <Paragraph>
      내일부터는 이러한 기계적 OS 위에 지능적 OS로서 K엔진이 한꺼풀 더 덮이게 된다. 그리고 모든 앱들이 이제는 K엔진 상에 장착된다. 1층에서 올라와 2층에서 살게 된다. 물론 "나는 2층이 싫어" 하면서 그 때에도 기계적 OS와 직접 교신을 하고자 하는 앱들이 잔존할 수 없는 것은 아니다. 다만 이론적으로만 그럴 수 있을 뿐이다. K엔진을 거저 준다는 대도 싫다는 앱은 없을 것이기 때문이다.
      </Paragraph>
      <Paragraph>
      컴퓨터 언어에 로우레벨과 하이레벨이 공존하듯이 앞으로의 OS 역시 로우레벨과 하이레벨로 구분되어 공존하게 되는 바 그 중 하이레벨 OS가 K엔진이 된다. 그리고 이 OS는 유일하다. 법적으로 향후 20년간 개발이 금지되어 있다.
      </Paragraph>
      <Paragraph>
      물론 어느 천천재가 등장하여 또 다른 지능기반 OS를 개발해 낼 수 있겠다. 새롭게 천지창조를 하고 새로운 사유의 원리를 만들어 낼 수 있다면 말이다.
      </Paragraph>
            </PageSection>
            <PageSection>
              <Title>K엔진의 구체적 작동방식 </Title>
              <PDFButton href="./pdf/Kengine_whitepaper.pdf" target="_blank">K엔진 백서 다운로드</PDFButton>
              <Image src="/image/image1.png" alt="Image" />
            </PageSection>
        </Container>
      </Overlay>
    </>
  );
}

export default Side5;