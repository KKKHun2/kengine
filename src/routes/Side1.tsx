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
  font-size: 18px;
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
  background-color: #8f88d7;
  border: none;
  border-radius: 10px;
  margin-left: 30px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  &:hover {
    background-color: ${props => props.theme.color.header};
  }
`;
const Side1: React.FC = () => {
  return (
    <>
      <Overlay>
        <Container>
            <PageSection>
              <Title>인간의 사유구조와 K엔진</Title>
              <Paragraph>
        “체계”는 이 세상의 모든 지식을 담을 수 있다. 지금까지는 이것으로서 충분했다. 지금까지는 책이라는 유형물에 모든 지식을 담을 수 밖에 없었고 그리하여 그 지식들을 체계화하는데 까지만 작업이 가능했고 더 이상의 어떤 처치를 할 방법도 없었다. 이것이 지난 수천년 동안 “책”이라는 형태로 지식이 정비되고 전수되고 이해되고 교육되어왔던 방식이다.
      </Paragraph>
      <Paragraph>
        어떤 문제되는 상황이 발생하면 일단은 책을 뒤진다. 물론 그 책이 머릿속에 잘 소화되어 정리되어 있는 사람, 즉 변호사와 같은 사람은 책을 뒤질 필요 없이 자신의 머릿속의 두뇌책을 사용하면 된다. 이 두뇌책의 속도는 엄청 빠르다. 즉 컴퓨터와 마찬가지이다. 질문을 받은 변호사는 즉각 답변한다. 이는 두뇌속에 저장된 정보들이 뇌신경망을 통해 서로 고도의 속도로 통신한 결과이다.
      </Paragraph>
      <Paragraph>
        이 장면에서 변호사의 머릿속 어딘가에는 지식들간의 연결정보가 저장되어 있음을 추측할 수 있다. 이 연결정보들이 상호 교통하면서 멋드러진 질서정연한 답변이 입에서 술술 흘러나오는 것이다. 이것을 구현한 것이 K엔진이다.
      </Paragraph>
      <Paragraph>
        이상에서 알 수 있듯이 지금까지는 오프라인 상에 “책”이라는 유형물을 만들어 내는 것에 그치고 그 책 속의 지식들간의 연결관계는 - 각고의 노력을 투입하여 - 인간의 머릿속 뇌신경세포에 저장했다고 할 수 있다. 즉 그 두가지는 분리되어 저장되었다.
      </Paragraph>
      <Paragraph>
        이들 분리된 두가지 요소를 통합한 것이 바로 K엔진이다. 컴퓨터는 이 구가지 요소를 하나의 하드디스크에 저장한다. 즉 이제 책만 만들면 더 이상 각고의 노력을 할 필요가 없어진 것이다. 책만 만들어지면 이제는 공부를 하지 않고도 누구나 변호사가 되는 것이다. 의사도 그렇고 약사도 마찬가지이다. 이 세상의 모든 전문지식이 “공부”할 필요 없이 나의 것이 되는 것이다. 나아가 구글링을 통해 얻는 일반정보 역시 체계화가 된다. 그리하여 일상적인 지식을 얻는 영역 역시 K엔진의 지배권 하에 들어오게 된다.
      </Paragraph>
      <Paragraph>
        일단 인간의 수작업에 의한 연결정보가 입력되기만 하면 그 다음에는 교과서의 체계적 특성에 바탕하여 모든 질문에 답변을 할 수 있다. 이 때 그 수작업은 내가 하는 것이 아니라 남이 해 준다. 나는 아무것도 할 것이 없다. 공부 안해도 언제나 100점이다. 학교 갈 이유가 없어진다.
      </Paragraph>
            </PageSection>
            <PageSection>
              <Title>- K엔진의 구체적 작동방식
              <PDFButton href="./pdf/Kengine_whitepaper.pdf" target="_blank">K엔진 백서 다운로드</PDFButton>
              </Title>
              <Image src="/image/image1.png" alt="Image" />
            </PageSection>
        </Container>
      </Overlay>
    </>
  );
}

export default Side1;