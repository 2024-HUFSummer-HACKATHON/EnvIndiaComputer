import React from 'react'
import { BsChatRightQuoteFill, BsPlayCircleFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const Container=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 1vw;

  padding:10%;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  flex-wrap: wrap;
  gap: 1vw;

  font-size: ${({theme})=>theme.fontSizes.pageHeader};
  font-weight: ${({theme})=>theme.fontWeights.Bold};
  width: 100%;
  .icons{
    width: 24px;
    height: 24px;
  }
`
const Topic = styled.div`
  /* margin-left: 4.5vw; */
  width: 100%;

  font-size: 26px;
  font-weight: ${({theme})=>theme.fontWeights.Bold};
`
const DonateDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const Box = styled.div`
  display: flex;
  justify-content: center;

  color:${({theme})=>theme.colors.black};
  background-color:${({theme})=>theme.backgroundColors.lightBlue};
  border-radius: 35px;

  width:100%;
  height: auto;

  padding: 1.5vw;

  p{
    letter-spacing: 0.1vw;
    max-width: 300px; /* 너비를 270px로 제한 */
    /* margin-top: 20px; */
    /* text-align: center; 문단 가운데 정렬 */

    word-wrap: normal; /* 기본적으로 공백에서 줄바꿈 */
    word-break: keep-all; /* 단어단위로 줄바꿈(단어 중간에 줄바꿈하지 않음) */
    line-height: 1.4; /* 라인 간격을 1.2로 설정 */
  }
`;

const DonationButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  background-color: #FFFFFF;

  font-size: ${({theme})=>theme.fontSizes.imgText};
  font-weight: ${({theme})=>theme.fontWeights.Bold};
  cursor: pointer;
  &:hover {
      opacity: 0.5;
    }

  .icons{
    margin-right: 16px;
    width: 24px;
    height: 24px;
  }
`

function Donate() {
  const navigate=useNavigate();

  return (
    <>
      <Container>
        <Title>
          <BsChatRightQuoteFill 
            className='icons'
            />
          6월 기부
        </Title>
        <Topic>
          장애인농구
        </Topic>
        <DonateDescription>
          <Box>
          신체적으로 불편한 학우들이 학교의 계단, 여닫이 문 등으로 인한 불편함을 겪지 않도록 시설 개선을 위한 모금
          </Box>
        </DonateDescription>
        <DonationButton
          onClick={() => navigate('/donate/completed')}
        >
          <BsPlayCircleFill className='icons'/>
            문 부시러 가기
        </DonationButton>
      </Container>
    </>
  )
}

export default Donate
