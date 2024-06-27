import React from 'react'
import { BsFillStarFill, BsCheckCircleFill, BsDashCircle } from "react-icons/bs";
import styled from 'styled-components';
import BlockButtons from '../components/BlockButtons';

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 35px 48px;
  .icons{
    margin-right: 16px;
    width: 24px;
    height: 24px;
  }
`
const List = styled.div`
  padding-bottom: 44px;
`

const months = [
  "1월", "2월", "3월", "4월", "5월", "6월", 
  "7월", "8월", "9월", "10월", "11월", "12월"
];

function PastRankingList() {
  const currentMonth = new Date().getMonth(); // 0부터 시작하므로 1월은 0, 12월은 11

  return (
    <>
      <Title>
        <BsFillStarFill className='icons'/>
        명예의 전당
      </Title>
      <List>
        {months.map((month, index) => {
          const isPast = index <= currentMonth; // 현재 달 포함
          const icon = isPast ? <BsCheckCircleFill/> : <BsDashCircle/>;
          const bgColor = isPast ? '#FFFBF1' : '#EFE7D4';
          return (
            <BlockButtons 
              key={index} 
              icon={icon} 
              text={`${month}: ${month} 주제`} 
              bgColor={bgColor} 
            />
          );
        })}
      </List>
      
    </>
  )
}

export default PastRankingList
