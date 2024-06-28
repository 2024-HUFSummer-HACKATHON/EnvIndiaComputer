import React from 'react';
import { BsFillStarFill, BsCheckCircleFill, BsDashCircle, BsFillTrophyFill } from "react-icons/bs";
import styled from 'styled-components';
import BlockButtons from '../components/BlockButtons';

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
`;

const months = [
  "1월", "2월", "3월", "4월", "5월", "6월", 
  "7월", "8월", "9월", "10월", "11월", "12월"
];

function PastRankingList() {
  const currentMonth = new Date().getMonth(); // 0부터 시작하므로 1월은 0, 12월은 11

  return (
    <>
      <Title>
        <BsFillTrophyFill className='icons'/>
        <span style={{color: '#0055A5', marginRight: '6px'}}>2024 </span> 명예의 전당
      </Title>
      <List>
        {months.map((month, index) => {
          const isPast = index < currentMonth; // 과거 달
          const isCurrent = index === currentMonth; // 현재 달
          const icon = isCurrent ? <BsCheckCircleFill/> : <BsDashCircle/>;
          const bgColor = isPast ? '#01B8E9' : isCurrent ? '#0055A5' : '#E1F0F4';
          const textColor = isPast ? '#ffffff' : isCurrent ? '#ffffff' : '#AFCED6'; // 현재 달은 흰색(#ffffff), 과거 달은 흰색(#ffffff), 미래 달은 #AFCED6

          return (
            <BlockButtons 
              key={index} 
              icon={icon} 
              text={`${month}: ${month} 주제`} 
              bgColor={bgColor}
              textColor={textColor}
            />
          );
        })}
      </List>
    </>
  );
}

export default PastRankingList;
