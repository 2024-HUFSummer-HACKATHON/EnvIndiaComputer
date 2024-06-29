import React from 'react';
import styled from 'styled-components';
import { BsFillStarFill } from "react-icons/bs";

const Container = styled.div`
  margin-bottom: 80px;
`;

const Box = styled.div`
  width: 340px;
  background-color: ${({ theme }) => theme.backgroundColors.lightBlue};
  border-radius: 15px;
  margin: 19px 44px;
  padding: 10px 0;
`;

const Person = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 1vw;
  margin: 19px 0;
  font-size: ${({ theme }) => theme.fontSizes.nameText};
  font-weight: 600;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icons1 {
    width: 24px;
    height: 24px;
    color: #01B8E9;
  }

  .icons2 {
    width: 19px;
    height: 19px;
    color: #01B8E9;
  }

  .icons3 {
    width: 12px;
    height: 12px;
    color: #01B8E9;
  }
`;

const Person2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 19px 0;
  font-size: ${({ theme }) => theme.fontSizes.nameText};
  font-weight: 600;
  color: #798E93;

  & > div:first-child {
    margin-left: 24px; /* 아이콘이 있던 자리만큼 여백 추가 */
  }
`;

const Number = styled.div`
  width: 36px;
  text-align: center;
`;

const Name = styled.div`
  width: 120px;
  text-align: center;
`;

const Percent = styled.div`
  width: 48px;
  text-align: center;
`;

const Amount = styled.div`
  width: 80px;
  text-align: center;
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function PersonRanking({ ranking }) {
  return (
    <Container>
      <Box>
        {ranking.map((person, index) => (
          index < 3 ? (
            <Person key={index}>
              <Icon className={`icon icons${index + 1}`}>
                <BsFillStarFill />
              </Icon>
              <Number>{index + 1}</Number>
              <Name>{person.name}</Name>
              <Percent>{person.contribute}%</Percent>
              <Amount>{person.money.toLocaleString()}원</Amount>
            </Person>
          ) : (
            <Person2 key={index}>
              <Number>{index + 1}</Number>
              <Name>{person.name}</Name>
              <Percent>{person.contribute}%</Percent>
              <Amount>{person.money.toLocaleString()}원</Amount>
            </Person2>
          )
        ))}
      </Box>
    </Container>
  );
}

export default PersonRanking;
