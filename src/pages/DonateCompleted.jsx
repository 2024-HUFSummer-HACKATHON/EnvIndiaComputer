import React, { useState } from 'react';
import styled from 'styled-components';
import Ball from '../images/Ball.png';
import GoalPost from '../images/GoalPost.png';
import PostBg from '../images/PostBG.png';

import { useNavigate } from "react-router-dom";
import BlockButtons from '../components/BlockButtons';
import { BsFillTrophyFill,BsChevronDoubleUp } from "react-icons/bs";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Swiper의 CSS 파일을 import

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* 화면 전체 세로 높이를 차지하도록 설정 */
  height: 100vh; 
  overflow: hidden; /* 스크롤 없이 내용이 잘리지 않도록 설정 */
  position: relative; /* 상대 위치 설정 */

  .Ball{
    width: 100%;
  }

`;

const Header = styled.p`
  position: absolute; /* 절대 위치 설정 */
  top: 20px; /* 화면 상단에서 20px 아래로 이동 */
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.pageHeader};
  font-weight: ${({ theme }) => theme.fontWeights.Bold};
  color: ${({ theme }) => theme.colors.black};
`;

const BallImage = styled.img`
  width: 50%;
  height: auto;
  cursor: grab;
`;

const GoalPostImage = styled.img`
  position: absolute;
  width: 50%;
  height: auto;
  margin-top: 10%;

  top:100px;

  .none{
    display: none;
  }
`;

const Arrow=styled.div`
  display: absolute;
  left: 114px;
  top:623px;
`;

const StyledSwiper = styled(Swiper)`
  /* width: 100%; */
  height: 60vh; /* Swiper의 높이를 80%로 설정 */

  /* 절대 위치 설정 */
  position: absolute; 
  left: 25%;
  /* left:150px; */
  width: 100%;
`;

function DonateCompleted() {
  const navigate = useNavigate();
  const [hideGoalPost, setHideGoalPost] = useState(false);

  return (
    <Container>
      <Header>
        <span className='dot'>"</span>
        <span>위로 드래그 해보세요!!</span>
        <span className='dot'>"</span>
      </Header>
      {/* <GoalPostImage src={GoalPost} hide={hideGoalPost}/> */}
      <GoalPostImage src={PostBg} hide={hideGoalPost}/>
      {/* <Swiper
        className='Ball'
        direction="vertical" // 수직 방향 슬라이드
        slidesPerView={1} // 한 번에 보여줄 슬라이드 개수
        mousewheel={true} // 마우스 휠로 슬라이드
        onReachEnd={() => navigate('/donate/celebrate')} // 슬라이드가 마지막에 도달하면 이동
      >
        <SwiperSlide>
        </SwiperSlide>
        <SwiperSlide>
          <BallImage src={Ball} />
        </SwiperSlide>
      </Swiper> */}
      <StyledSwiper
        direction="vertical" // 수직 방향 슬라이드
        slidesPerView={1} // 한 번에 보여줄 슬라이드 개수
        mousewheel={true} // 마우스 휠로 슬라이드
        onReachEnd={() => navigate('/donate/celebrate')} // 슬라이드가 마지막에 도달하면 이동
      >
        <SwiperSlide>
        </SwiperSlide>
        <SwiperSlide>
          <BallImage src={Ball} />
        </SwiperSlide>
      </StyledSwiper>
      {/* <Arrow>
        <BsChevronDoubleUp style={{ marginTop:'5px',width: '200px', height:'200px' }}/>
        <BsChevronDoubleUp style={{ width: '200px', height:'200px' }}/>
      </Arrow> */}
      <BlockButtons
        icon={<BsFillTrophyFill />}
        text="명예의 전당으로 이동"
        onClick={() => navigate('/donate/celebrate')}
      />
    </Container>
  );
}

export default DonateCompleted;
