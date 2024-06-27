import React from 'react'
import { BsChatRightQuoteFill, BsPlayCircleFill } from "react-icons/bs";

import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 48px 0 22px 48px;
  .icons{
    margin-right: 16px;
    width: 24px;
    height: 24px;
  }
`
const Topic = styled.div`
  margin: 18px 42px; 

`

const DonateDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const Box = styled.div`
  width: 340px;
  height: 440px; //나중에 api연동하고나면 height빼기-이미지 크기에 맞게 늘어나게끔하기위해
  background-color: #FFFBF1;
  border-radius: 35px;
  display: flex;
  justify-content: center;
`
const Text = styled.div`
  letter-spacing: 0.1vw;
  max-width: 300px; /* 너비를 270px로 제한 */
  margin-top: 20px;
  /* text-align: center; 문단 가운데 정렬 */

  word-wrap: normal; /* 기본적으로 공백에서 줄바꿈 */
  word-break: keep-all; /* 단어단위로 줄바꿈(단어 중간에 줄바꿈하지 않음) */
  line-height: 1.4; /* 라인 간격을 1.2로 설정 */
`

const DonationButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 47px auto;
  border: none;
  background-color: #FFFFFF;
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
  return (
    <>
      <Title>
        <BsChatRightQuoteFill className='icons'/>
        8월 기부
      </Title>
      <Topic>
        배리어 프리 캠퍼스 조성
      </Topic>
      <DonateDescription>
        <Box>
          <Text>
            신체적으로 불편한 학우들이 학교의 계단, 여닫이 문 등으로 인한 불편함을 겪지 않도록 시설 개선을 위한 모금
          </Text>
        </Box>
      </DonateDescription>
      <DonationButton>
        <BsPlayCircleFill className='icons'/>
          문 부시러 가기
      </DonationButton>
    </>
  )
}

export default Donate
