//k엔진 사이트 바로가기

import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Contatiner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding:10px;
    
`
const ExternalLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  color: ${props => props.theme.color.text};
  cursor: pointer;
  background-color: #6354bb;
  border: 3px solid #6354bb;
  border-radius: 8px;
  padding: 10px 20px;
  margin-top:25px;
  &:hover {
    background-color: ${props => props.theme.color.background};
    color: #8f88d7;
  }
  transition: background-color 0.5s, color 0.2s;
  @media (max-width: 900px) {
    margin-top:80px;
  }
`;

const KengineOs = () => {
  

  return (
    <>
    <Contatiner>
      <ExternalLink to="http://kengine.filmasfilm.com/default_desktop.aspx" target="_blank">
        kengine OS 채팅웹바로가기
      </ExternalLink>
    </Contatiner>
    </>
  );
};

export default KengineOs;



  