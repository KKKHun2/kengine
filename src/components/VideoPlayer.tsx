import styled from 'styled-components';


const HeaderWrapper = styled.div`
  margin:50px 50px;
  width:100%;
.pc {display:block}
.m {display:none}
 @media (max-width: 844px) {
  .pc {display:none}
  .m {display:block}	
  
  }
`;


const VideoPlayer: React.FC = () => {

  return (
    <div>
      <HeaderWrapper>
      <video muted autoPlay loop className="m">
          <source src="./video/m_movie.mp4" type="video/mp4" />
        </video>
    
        <video muted autoPlay loop className="pc">
          <source src="./video/pc_movie.mp4" type="video/mp4" />
        </video>
        </HeaderWrapper>
    </div>
  );
};

export default VideoPlayer;
