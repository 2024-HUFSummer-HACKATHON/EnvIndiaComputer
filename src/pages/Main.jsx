import React from 'react'
import { BsChatRightQuoteFill, BsArrowRightCircleFill, BsFillStarFill, BsPersonFill } from "react-icons/bs";
import styled from 'styled-components';
import BlockButtons from '../components/BlockButtons';

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
const DonateDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const Box = styled.div`
  width: 340px;
  height: 190px;
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
  margin: 48px 0 22px 48px;
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

function Main() {
  return (
    <>
      <Title>
        <BsChatRightQuoteFill className='icons'/>
        8월 기부
      </Title>
      <DonateDescription>
        <Box>
          <Text>
            신체적으로 불편한 학우들이 학교의 계단, 여닫이 문 등으로 인한 불편함을 겪지 않도록 시설 개선을 위한 모금
          </Text>
        </Box>
      </DonateDescription>
      <DonationButton>
        <BsArrowRightCircleFill className='icons'/>
          기부하러 가기
      </DonationButton>
      <BlockButtons icon={<BsFillStarFill/>} text={ "명예의 전당" }/>
      <BlockButtons icon={<BsPersonFill/>} text={ "마이페이지 이동" }/>
    </>
  )
}

export default Main
