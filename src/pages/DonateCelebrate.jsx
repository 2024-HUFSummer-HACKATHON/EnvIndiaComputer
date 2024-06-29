import React from 'react';
import { useNavigate } from "react-router-dom";
import { BsFillTrophyFill, BsBasket3Fill } from "react-icons/bs";
import styled from 'styled-components';

import BallGoal from '../images/BallGoal.png';
import Banner from '../images/banner.png';
import BlockButtons from '../components/BlockButtons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 2vw;
  position: relative;
`;

const CelebrateText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.pageHeader};
  font-weight: ${({ theme }) => theme.fontWeights.Bold};
  white-space: pre-wrap; /* 줄바꿈을 인식하고 적용 */
  text-align: center; /* 텍스트를 가운데 정렬 */
  word-wrap: normal;
  word-break: keep-all;
  line-height: 1.4;

  .donation {
    color: ${({ theme }) => theme.backgroundColors.blue};
  }
`;

const BallGoalImg = styled.img`
  width: 50%;
  height: auto;
`;

const BannerImg = styled.img`
  width: 428px;
  height: auto;
  position: fixed;
  bottom: 0;
`;

function DonateCelebrate() {
  const navigate = useNavigate();
  
  return (
    <>
      <Container>
        <BallGoalImg src={BallGoal} />
        <CelebrateText>
          성공적으로<br />
          <span><span className="donation">기부</span> 되었습니다</span>
        </CelebrateText>
        <BlockButtons 
          icon={<BsFillTrophyFill />} 
          text={"명예의 전당"} 
          onClick={() => navigate('/ranking')} 
        />
        <BlockButtons 
          icon={<BsBasket3Fill />} 
          text={"스포츠 용품 구매하러 가기"}
          onClick={() => window.location.href = 'https://zerotohero.co.kr/?gad_source=1&gclid=CjwKCAjwvvmzBhA2EiwAtHVrb7vuBVAQILpLLH43t9HHpt8hKrYg0JdFeWIMmczZPRRAvxE12rSlrhoCquwQAvD_BwE'} 
        />
      </Container>
      <BannerImg src={Banner} />
    </>
  );
}

export default DonateCelebrate;
