import React from 'react'
import styled from 'styled-components'
import { BsFillStarFill } from "react-icons/bs";

const Box = styled.div`
    width: 340px;
    background-color: ${({theme})=>theme.backgroundColors.lightBlue};
    border-radius: 15px;
    margin: 19px 44px;
    padding: 10px 0;
`

const Person = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1vw;
    margin: 19px 0;
    font-size: ${({theme})=>theme.fontSizes.nameText};
    font-weight: 600;
    .icons1{
        /* margin-left: 16px; */
        width: 24px;
        height: 24px;
        color: #01B8E9;
    }
    .icons2{
        /* margin-left: 16px; */
        width: 19px;
        height: 19px;
        color: #01B8E9;
    }
    .icons3{
        /* margin-left: 16px; */
        width: 12px;
        height: 12px;
        color: #01B8E9;
    }
`
const Person2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1vw;
    margin-top: 19px;
    margin-bottom: 19px;
    margin-left: 36px;
    font-size: ${({theme})=>theme.fontSizes.nameText};
    font-weight: 600;
    color: #798E93;
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
const Icon = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
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
            <Icon>
                <BsFillStarFill className='icons2'/> 
            </Icon>
            <Number>2</Number>
            <Name>김현아</Name>
            <Percent>60%</Percent>
            <Amount>600,000원</Amount>
        </Person>
        <Person>
            <Icon>
                <BsFillStarFill className='icons3'/> 
            </Icon>
            <Number>3</Number>
            <Name>양혜인</Name>
            <Percent>45%</Percent>
            <Amount>450,000원</Amount>
        </Person>
        <Person2 className='under'>
            <Number>4</Number>
            <Name>유지희</Name>
            <Percent>30%</Percent>
            <Amount>350,000원</Amount>
        </Person2>
        <Person2>
            <Number>5</Number>
            <Name>김정주</Name>
            <Percent>20%</Percent>
            <Amount>150,000원</Amount>
        </Person2>
      </Box>
    </>
  )
}

export default PersonRanking
