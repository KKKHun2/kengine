import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  background-color: ${props => props.theme.color.background};
  color: ${props => props.theme.color.text};
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 900px) {
    margin-top: 20px;
  }
`;

const Container = styled.div`
  width: 80%;
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
`;

const PageSection = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
  @media (max-width: 900px) {
    text-align: center;
  }
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
  margin-top: 20px;
  margin: 0 auto;
  table-layout: fixed;
`;

const TableHeader = styled.th`
  background-color: ${props => props.theme.color.header};
  border: 1px solid #ccc;
  padding: 15px;
  text-align: center;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis; 
`;

const TableRow = styled.tr`
  background-color: ${props => props.theme.color.neutral};
  &:nth-child(odd) {
    background-color: ${props => props.theme.color.background};
  }
`;

const TableCell = styled.td`
  border: 1px solid #ccc;
  margin: 20px;
  text-align: center;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis; 
  @media (max-width: 900px) {
    font-size:10px;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #fff;
  display: inline-block;
  padding: 10px 25px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  background-color: #6354bb;
  border: 3px solid #6354bb;
  border-radius: 10px;
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
          <PageSection>
            <Title>시사회</Title>
            <Paragraph><span className="date_btn">일시</span> 2023.10.24 (목) 14:00</Paragraph>
            <Paragraph><span className="date_btn">장소</span> 코리아나 호텔 7층 스테이트룸 (서울 중구 세종대로 135 코리아나호텔)</Paragraph>
          </PageSection>
          <PageSection>
            <Title>행사내용</Title>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader>순서</TableHeader>
                  <TableHeader>시간</TableHeader>
                  <TableHeader>발언자</TableHeader>
                  <TableHeader>진행내용</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>14:00</TableCell>
                  <TableCell>&nbsp;</TableCell>
                  <TableCell>개회</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>14:00</TableCell>
                  <TableCell>사회자</TableCell>
                  <TableCell>참가자 및 회사 소개</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>14:05</TableCell>
                  <TableCell>변리사</TableCell>
                  <TableCell>K엔진 특허 현황</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>4</TableCell>
                  <TableCell>14:10</TableCell>
                  <TableCell>법률고문 전병서</TableCell>
                  <TableCell>K엔진 데이터</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>5</TableCell>
                  <TableCell>14:15</TableCell>
                  <TableCell>대표이사 박종배</TableCell>
                  <TableCell>K엔진 기술</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>6</TableCell>
                  <TableCell>14:20</TableCell>
                  <TableCell>&nbsp;</TableCell>
                  <TableCell>질의응답</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>7</TableCell>
                  <TableCell>15:00</TableCell>
                  <TableCell>&nbsp;</TableCell>
                  <TableCell>폐회</TableCell>
                </TableRow>
              </tbody>
            </Table>
            <StyledLink href="./Kengine_whitepaper.pdf" target="_blank">K엔진 백서 다운로드</StyledLink>
          </PageSection>
        </Container>
      </Overlay>
    </>
  );
}

export default Side4;
