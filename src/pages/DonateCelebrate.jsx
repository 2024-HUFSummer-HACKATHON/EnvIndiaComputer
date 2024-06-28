import React from 'react'
import { useNavigate } from "react-router-dom";
import { BsFillTrophyFill, BsBasket3Fill } from "react-icons/bs";
import styled from 'styled-components';

import BallGoal from '../images/BallGoal.png';
import Banner from '../images/banner.png';
import BlockButtons from '../components/BlockButtons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5vw;
  position: relative;
  min-height: calc(100vh - 100px); /* Footer 높이만큼 계산 */
  padding-bottom: 100px; /* Footer 높이만큼 패딩 추가 */
`;

const CelebrateText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.pageHeader};
  font-weight: ${({ theme }) => theme.fontWeights.Bold};
  white-space: pre-wrap; /* 줄바꿈을 인식하고 적용 */
  text-align: center; /* 텍스트를 가운데 정렬 */
`;

const BallGoalImg = styled.img`
  width: 50%;
  height: auto;
`;

const BannerImg = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
`;

function DonateCelebrate() {
  const navigate = useNavigate();
  
  return (
    <Container>
      <BallGoalImg src={BallGoal} />
      <CelebrateText>
        성공적으로{"\n"}
        기부되었습니다
      </CelebrateText>
      <BlockButtons 
        icon={<BsFillTrophyFill />} 
        text={"명예의 전당"} 
        onClick={() => navigate('/ranking')} 
      />
      <BlockButtons 
        icon={<BsBasket3Fill />} 
        text={"스포츠 용품 구매하러 가기"} 
        onClick={() => navigate('/test')} 
      />
      <BannerImg src={Banner} />
    </Container>
  );
}

export default DonateCelebrate;
