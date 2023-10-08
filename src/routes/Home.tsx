import React from 'react';
import styled from 'styled-components';
import KengineOs from '../components/KengineOs';
import VideoPlayer from '../components/VideoPlayer';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.color.background};
  color: ${props => props.theme.color.text};
  width: 100%;
`;

const Container = styled.div`
  max-width: 1600px;
  width:100%;
`;

const MainVideo = styled.div`
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  padding-top: 58%;
  display: flex;
  justify-content: center;
  align-items: center; 

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 900px) {
    padding-top: 130%;
    margin-top: 50px; 
    margin-bottom: 50px;
  }
 
`;

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Container>
      <KengineOs />
        <MainVideo>
          <VideoPlayer />
        </MainVideo>
      </Container>
    </Wrapper>
  );
}

export default Home;
