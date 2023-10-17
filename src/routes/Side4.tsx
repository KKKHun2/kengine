import React from 'react';
import { Link } from 'react-router-dom';
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
    margin-top: 50px;
    padding: 15px;
  }
`;

const Container = styled.div`
  width: 80%;
  max-width: 1600px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px ${props => props.theme.color.background};
  margin-bottom: 20px;
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
    min-width: 30%;
  }
`;
const Paragraph = styled.p`
  color: ${props => props.theme.color.text};
  line-height: 2;
  margin-bottom: 1rem;
  margin-top:1rem;
  font-size: 18px;
  font-weight: normal;
  text-align: left;
  @media (max-width: 900px) {
    text-align: center; 
    min-width: 30%;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: ${props => props.theme.color.text};
  margin-top: 20px;
  margin: 0 auto;
  table-layout: fixed;
  padding: 5px;
`;

const TableHeader = styled.th`
  background-color: ${props => props.theme.color.header};
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  font-weight: 400;
  @media (max-width: 900px) {
    font-size: 10px;
  }
`;

const TableRow = styled.tr`
  background-color: ${props => props.theme.color.neutral};
  &:nth-child(odd) {
    background-color: ${props => props.theme.color.background};
  }
`;

const NarrowCell = styled.td`
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  width: 10%;
  @media (max-width: 900px) {
    font-size: 10px;
  }
`;

const WideCell = styled.td`
  border: 1px solid #ccc;
  padding: 5px;
  margin: 20px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  width: 70%; 
  @media (max-width: 900px) {
    font-size: 10px;
  }
`;

const PDFButton = styled.button`
  font-weight: bold;
  width: 200px;
  font-size: 13px;
  margin-top: 30px;
  padding: 15px 15px;
  cursor: pointer;
  border-radius: 12px;
  border: 4px solid #6354bb;
  &:hover {
    color: #000000;
    background: linear-gradient(to right, #fff 50%, #6354bb 45%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.6s;
  }
  @media (max-width: 900px) {
    width: 50%;
    padding: 15px 10px;
  }
  @media (max-width: 515px) {
    width: 80%;
    padding: 15px 10px;
  }
`;


const Side4: React.FC = () => {
  return (
    <>
      <Overlay>
        <Container>
            <Title>시사회</Title>
            <Paragraph><span className="date_btn">일시: </span> 2023.10.24 (목) 14:00</Paragraph>
            <Paragraph><span className="date_btn">장소: </span> 코리아나 호텔 7층 스테이트룸 (서울 중구 세종대로 135 코리아나호텔)</Paragraph>
            <Title>행사내용</Title>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader className='t1'>순서</TableHeader>
                  <TableHeader>시간</TableHeader>
                  <TableHeader>발언자</TableHeader>
                  <TableHeader className='t2'>진행내용</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                <TableRow>
                  <NarrowCell>1</NarrowCell>
                  <NarrowCell>14:00</NarrowCell>
                  <WideCell>&nbsp;</WideCell>
                  <WideCell>개회</WideCell>
                </TableRow>
                <TableRow>
                  <NarrowCell>2</NarrowCell>
                  <NarrowCell>14:00</NarrowCell>
                  <WideCell>사회자</WideCell>
                  <WideCell>참가자 및 회사 소개</WideCell>
                </TableRow>
                <TableRow>
                  <NarrowCell>3</NarrowCell>
                  <NarrowCell>14:05</NarrowCell>
                  <WideCell>변리사</WideCell>
                  <WideCell>K엔진 특허 현황</WideCell>
                </TableRow>
                <TableRow>
                  <NarrowCell>4</NarrowCell>
                  <NarrowCell>14:10</NarrowCell>
                  <WideCell>법률고문 전병서</WideCell>
                  <WideCell>K엔진 데이터</WideCell>
                </TableRow>
                <TableRow>
                  <NarrowCell>5</NarrowCell>
                  <NarrowCell>14:15</NarrowCell>
                  <WideCell>대표이사 박종배</WideCell>
                  <WideCell>K엔진 기술</WideCell>
                </TableRow>
                <TableRow>
                  <NarrowCell>6</NarrowCell>
                  <NarrowCell>14:20</NarrowCell>
                  <WideCell>&nbsp;</WideCell>
                  <WideCell>질의응답</WideCell>
                </TableRow>
                <TableRow>
                  <NarrowCell>7</NarrowCell>
                  <NarrowCell>15:00</NarrowCell>
                  <WideCell>&nbsp;</WideCell>
                  <WideCell>폐회</WideCell>
                </TableRow>
              </tbody>
            </Table>
            <PDFButton>
                <Link to= "./pdf/Kengine_whitepaper.pdf">K엔진 백서 다운로드</Link> 
                </PDFButton>
        </Container>
      </Overlay>
    </>
  );
}

export default Side4;
