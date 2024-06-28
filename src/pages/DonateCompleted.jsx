import React from 'react';
import styled from 'styled-components';
import Ball from '../images/Ball.png';
import GoalPost from '../images/GoalPost.png';

import { useNavigate } from "react-router-dom";
import BlockButtons from '../components/BlockButtons';
import { BsChatRightQuoteFill, BsArrowRightCircleFill, BsFillTrophyFill, BsPersonFill } from "react-icons/bs";


const Container=styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  gap:2vw;
`;
const Header=styled.p`
  span{
    font-size: ${({theme})=>theme.fontSizes.pageHeader};
    font-weight: ${({theme})=>theme.fontWeights.Bold};
  }
  .dot{
      color: ${({theme})=>theme.backgroundColors.blue};
      font-size: 40px;
    }
`;

const GoalPostImage=styled.img`
  width: 50%;
  height: auto;

  margin-top: 10%;
`;

const BallImage=styled.img`
  width: 50%;
  height: auto;
`;

function DonateCompleted() {
  const navigate=useNavigate();
  return (
    <>
      <Container>
        <Header>
          <span className='dot'>"</span>
          <span>공을 위로 던져 보세요!!</span>
          <span className='dot'>"</span>
        </Header>
        <GoalPostImage src={GoalPost} />
        <BallImage src={Ball}/>
        <BlockButtons 
          icon={<BsFillTrophyFill/>} 
          text={ "test이동" } 
          onClick={()=>navigate('/donate/celebrate')}
          />
      </Container>
    </>
  )
}

export default DonateCompleted
