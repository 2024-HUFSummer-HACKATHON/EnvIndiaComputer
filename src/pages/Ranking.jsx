import React, { useState, useEffect } from 'react'
import { BsChatRightQuoteFill, BsFillTrophyFill, BsPersonFill } from "react-icons/bs";
import styled from 'styled-components';
import BlockButtons from '../components/BlockButtons';
import { useNavigate } from 'react-router-dom';
import PersonRanking from '../components/PersonRanking';


const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 9px 0 50px 36px;
  .icons{
    margin-right: 16px;
    width: 30px;
    height: 30px;
  }
`
const Month = styled.div`
  font-size: ${({theme})=>theme.fontSizes.pageHeader};
  font-weight: ${({theme})=>theme.fontWeights.Bold};
`
const Subject = styled.div`
  font-size: ${({theme})=>theme.fontSizes.imgText};
  font-weight: ${({theme})=>theme.fontWeights.Bold};
  margin-left: 9px;
`

const PercentBox = styled.div`
  width: 170px;
  height: 120px;
  background-color: #333333;
  border-radius: 7px;
  margin-left: 50px;
`
const Dday = styled.div`
  font-family: ${({theme})=>theme.fonts.english};
  font-weight: 400;
  font-size: 39px;
  padding-top: 9px;
  padding-left: 13px;
  color: ${({theme})=>theme.colors.white};
  /* border: 1px solid #0055A5; */
  /* -webkit-text-stroke: 1px solid #0055A5; 글씨 테두리 속성 */

`
const Percent = styled.div`
  font-family: ${({theme})=>theme.fonts.english};
  font-weight: 400;
  font-size: 65px;
  padding-top: 3px;
  padding-right: 11px;
  color: #01B8E9;
  display: flex;
  justify-content: flex-end;
`

const StyledBlockButton = styled(BlockButtons)`
  button {
    &:hover {
      opacity: 1; // 호버 효과 제거
    }
  }
`

const HallMove = styled.button`
  font-size: 12px;
  font-weight: 700;
  color: #0055A5;
  cursor: pointer;
  border: none;
  background-color: #ffffff;
  margin-left: 230px;
`

// 디데이 계산 함수
const calculateDday = () => {
  const today = new Date();
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const timeDiff = lastDayOfMonth - today;
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return daysDiff;
}

function Ranking() {
  const navigate = useNavigate();
  const [dday, setDday] = useState(calculateDday());

  useEffect(() => {
    const timer = setInterval(() => {
      setDday(calculateDday());
    }, 1000 * 60 * 60 * 24); // 하루에 한 번 업데이트

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Title>
        <BsChatRightQuoteFill className='icons'/>
        <Month>
          6월 기부
        </Month>
        <Subject>
          : 장애인 농구
        </Subject>
      </Title>
      <PercentBox>
        <Dday>
          D-{dday}
        </Dday>
        <Percent>
          56%
        </Percent>
      </PercentBox>

      {/* 애니메이션 적용 부분 */}
      <StyledBlockButton icon={<BsFillTrophyFill/>} text={ "6월 명예의 전당" }/>
      <HallMove onClick={() => navigate('/join')}>
        2024년 명예의 전당 보러 가기
      </HallMove>
      <PersonRanking></PersonRanking>
    </>
  )
}

export default Ranking;
