import React from 'react';
import { BsCheckCircleFill, BsFillTrophyFill } from "react-icons/bs";
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import BlockButtons from '../components/BlockButtons';
import PersonRanking from '../components/PersonRanking';

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 9px 0 50px 36px;
  .icons{
    margin-right: 16px;
    width: 24px;
    height: 24px;
  }
`;

const Month = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.BtnText};
  font-weight: 600;
`;

const Subject = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.BtnText};
  font-weight: 700;
  margin-left: 9px;
`;

const PercentBox = styled.div`
  width: 170px;
  height: 120px;
  background-color: #333333;
  border-radius: 7px;
  margin-left: 50px;
`;

const AnimationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimationBox = styled.div`
  position: relative;
  width: 378px;
  height: 253px;
  /* background-color: #F1FCFF; */
  background-image: url('/images/complete.png');
  background-size: cover; //이미지를 박스에 맞추기 위해
  background-repeat: no-repeat; //이미지 반복 제거
  /* overflow: hidden;  // 공이 박스를 벗어나지 않도록 설정 */
`;

const MoveBall = styled.img`
  position: absolute;
  width: 50px;  // 이미지 크기에 맞게 설정
  height: 50px; // 이미지 크기에 맞게 설정
  animation: moveBall 0.75s infinite ease-in-out; // 부드러운 전환 효과 추가
  
  @keyframes moveBall {
    0% {
      left: 0;
      bottom: 0;
    }
    12.5% {
      left: 12.5%;
      bottom: 35%;
    }
    25% {
      left: 25%;
      bottom: 70%;
    }
    37.5% {
      left: 37.5%;
      bottom: 85%;
    }
    50% {
      left: 50%;
      bottom: 100%;
    }
    62.5% {
      left: 62.5%;
      bottom: 85%;
    }
    75% {
      left: 75%;
      bottom: 70%;
    }
    87.5% {
      left: 87.5%;
      bottom: 35%;
    }
    100% {
      left: 100%;
      bottom: 0;
    }
  }
`;

const Dday = styled.div`
  font-family: ${({ theme }) => theme.fonts.english};
  font-weight: 400;
  font-size: 39px;
  padding-top: 9px;
  padding-left: 13px;
  color: ${({ theme }) => theme.colors.white};
`;

const Percent = styled.div`
  font-family: ${({ theme }) => theme.fonts.english};
  font-weight: 400;
  font-size: 65px;
  padding-top: 3px;
  padding-right: 11px;
  color: #01B8E9;
  display: flex;
  justify-content: flex-end;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
  margin-bottom: 19px;
`
const StyledBlockButton = styled(BlockButtons)`
  button {
    &:hover {
      opacity: 1; // 호버 효과 제거
    }
  }
`;

const HallMove = styled.button`
  font-size: 12px;
  font-weight: 700;
  color: #0055A5;
  cursor: pointer;
  border: none;
  background-color: #ffffff;
  margin-left: 230px;
`;

function PastRanking() {
  const navigate = useNavigate();
  const location = useLocation();
  const { month } = location.state || { month: '1월' }; // 기본값을 '1월'로 설정

  return (
    <>
      <Title>
        <BsCheckCircleFill className='icons'/>
        <Month>
          {month} 명예의 전당
        </Month>
        <Subject>
          : 장애인 수영
        </Subject>
      </Title>
      <PercentBox>
        <Dday>
          D-End
        </Dday>
        <Percent>
          100%
        </Percent>
      </PercentBox>

      <AnimationContainer>
        <AnimationBox>
          <MoveBall src="/images/moveBall.png" />
        </AnimationBox>
      </AnimationContainer>

      <ButtonContainer>
        <StyledBlockButton icon={<BsFillTrophyFill />} text={`${month} 명예의 전당`} />
      </ButtonContainer>
      <HallMove onClick={() => navigate('/join')}>
        2024년 명예의 전당 보러 가기
      </HallMove>
      <PersonRanking />
    </>
  );
}

export default PastRanking;
