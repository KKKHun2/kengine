import React from 'react';
import styled from 'styled-components';
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
  max-width: 1200px;
  width:100%;
`;

const MainVideo = styled.div`
  margin-top: 50px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  padding-top: 80%;
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
  @media (max-width: 844px) {
    padding-top: 120%;
    margin-top: 50px; 
    margin-bottom: 0px;
  }
 
`;

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <MainVideo>
          <VideoPlayer />
        </MainVideo>
      </Container>
    </Wrapper>
  );
}

export default Home;
