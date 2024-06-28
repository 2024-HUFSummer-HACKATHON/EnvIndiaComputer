import React from 'react'
import styled from 'styled-components'
import { BsFillStarFill } from "react-icons/bs";

const Box = styled.div`
    width: 340px;
    background-color: ${({theme})=>theme.backgroundColors.lightBlue};
    border-radius: 15px;
    margin: 19px 44px;
`

const Person = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2.5vw;
    margin: 19px 0;
    font-size: ${({theme})=>theme.fontSizes.nameText};
    font-weight: 600;
    .icons1{
        margin-right: 16px;
        width: 24px;
        height: 24px;
        color: #01B8E9;
    }
    .icons2{
        margin-right: 16px;
        width: 19px;
        height: 19px;
        color: #01B8E9;
    }
    .icons3{
        margin-right: 16px;
        width: 12px;
        height: 12px;
        color: #01B8E9;
    }
`

const Number = styled.div`
    width: 36px;
    text-align: center;
`

const Name = styled.div`
    text-align: center;
`

const Percent = styled.div`
    width: 48px;
    text-align: center;
`

const Amount = styled.div`
    text-align: center;
`
function PersonRanking() {
  return (
    <>
      <Box>
        <Person>
            <BsFillStarFill className='icons1'/> 
            <Number>1</Number>
            <Name>임승민</Name>
            <Percent>80%</Percent>
            <Amount>800,000원</Amount>
        </Person>
        <Person>
            <BsFillStarFill className='icons2'/> 
            <Number>2</Number>
            <Name>김현아</Name>
            <Percent>60%</Percent>
            <Amount>600,000원</Amount>
        </Person>
        <Person>
            <BsFillStarFill className='icons3'/> 
            <Number>3</Number>
            <Name>양혜인</Name>
            <Percent>45%</Percent>
            <Amount>450,000원</Amount>
        </Person>
      </Box>
    </>
  )
}

export default PersonRanking
