import React from 'react';
import { BsFillStarFill, BsCheckCircleFill, BsDashCircle, BsFillTrophyFill } from "react-icons/bs";
import styled from 'styled-components';
import BlockButtons from '../components/BlockButtons';
import { useNavigate } from "react-router-dom";

const Container=styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap;
  gap: 1vw; */

  align-items: center;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 35px 48px;
  font-size: ${({ theme }) => theme.fontSizes.BtnText};
  font-weight: 600;
  .icons {
    margin-right: 16px;
    width: 24px;
    height: 24px;
  }
`;

const List = styled.div`
  padding-bottom: 44px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1vw;
`;

const months = [
  "1월", "2월", "3월", "4월", "5월", "6월", 
  "7월", "8월", "9월", "10월", "11월", "12월"
];

function PastRankingList() {
  const currentMonth = new Date().getMonth(); // 0부터 시작하므로 1월은 0, 12월은 11
  const navigate = useNavigate();

  const handleClick = (index) => {
    if (index < currentMonth) {
      navigate('/pastranking', { state: { month: months[index] } });
    } else if (index === currentMonth) {
      navigate('/ranking');
    } else {
      alert("아직 기부가 시작되지 않았어요!");
    }
  };

  return (
    <>
      <Container>
        <Title>
          <BsFillTrophyFill className='icons'/>
          <span style={{color: '#0055A5', marginRight: '6px'}}>2024 </span> 명예의 전당
        </Title>
        <List>
          {months.map((month, index) => {
            const isFuture = index>currentMonth; // 미래 달
            const isCurrent = index === currentMonth || index < currentMonth; // 현재 달
            const icon = isCurrent ? <BsCheckCircleFill/> : <BsDashCircle/>;
            const bgColor = isFuture ? '#E1F0F4' : index === currentMonth ? '#0055A5' : '#01B8E9';
            // const textColor = isFuture || isCurrent ? '#ffffff' : '#AFCED6'; // 현재 달과 과거 달은 흰색(#ffffff), 미래 달은 #AFCED6
            const textColor = isCurrent ? '#ffffff' : '#AFCED6'; 
            // 현재 달과 과거 달은 흰색(#ffffff), 미래 달은 #AFCED6
            
            return (
              <BlockButtons 
                key={index} 
                icon={icon} 
                text={`${month}: ${month} 주제`} 
                bgColor={bgColor}
                textColor={textColor}
                onClick={() => handleClick(index)}
              />
            );
          })}
        </List>
      </Container>
    </>
  );
}

export default PastRankingList;
