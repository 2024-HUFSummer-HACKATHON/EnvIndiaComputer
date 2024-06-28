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
          56%
        </Percent>
      </PercentBox>

      <StyledBlockButton icon={<BsFillTrophyFill />} text={`${month} 명예의 전당`} />
      <HallMove onClick={() => navigate('/join')}>
        2024년 명예의 전당 보러 가기
      </HallMove>
      <PersonRanking />
    </>
  );
}

export default PastRanking;
