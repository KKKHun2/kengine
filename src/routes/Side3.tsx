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
  margin-top: 30px;
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
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const PageSection = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: ${props => props.theme.color.text};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: ${props => props.theme.color.text};

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: ${props => props.theme.color.header};
  }
`;

const Side3: React.FC = () => {
  return (
    <>
      <Overlay>
        <Container>
          <PageSection>
            <Title>시사회</Title>
            <Paragraph><span className="date_btn">일시</span> 2023.10.24 (목) 14:00</Paragraph>
            <Paragraph><span className="date_btn">장소</span> 코리아나 호텔 7층 스테이트룸 (서울 중구 세종대로 135 코리아나호텔)</Paragraph>
          </PageSection>
          <PageSection>
            <Title>행사내용</Title>
            <Table>
              <thead>
                <tr>
                  <th>순서</th>
                  <th>시간</th>
                  <th>발언자</th>
                  <th>진행내용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>14:00</td>
                  <td>&nbsp;</td>
                  <td>개회</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>14:00</td>
                  <td>사회자</td>
                  <td>참가자 및 회사 소개</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>14:05</td>
                  <td>변리사</td>
                  <td>K엔진 특허 현황</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>14:10</td>
                  <td>법률고문 전병서</td>
                  <td> K엔진 데이터</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>14:15</td>
                  <td>대표이사 박종배</td>
                  <td>K엔진 기술</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>14:20</td>
                  <td>&nbsp;</td>
                  <td>질의응답</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>15:00</td>
                  <td>&nbsp;</td>
                  <td>폐회</td>
                </tr>
              </tbody>
            </Table>
            <div className="engin_btn"><a href="./Kengine_whitepaper.pdf" target="_blank">K엔진 백서 다운로드</a></div>
          </PageSection>
        </Container>
      </Overlay>
    </>
  );
}

export default Side3;
