import React from 'react'
import { BsEmojiWinkFill, BsFillStarFill, BsPlusCircleFill } from "react-icons/bs";
import styled from 'styled-components';
import BlockButtons from '../components/BlockButtons';

const Icon = styled.div`
  margin: 106px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  .icons{
    width: 175px;
    height: 175px;
  }
`
const CelebrateText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

function DonateCelebrate() {
  return (
    <>
      <Icon>
        <BsEmojiWinkFill className='icons'/>
      </Icon>
      <CelebrateText>문을 뿌셨어요!!</CelebrateText>
      <BlockButtons icon={<BsFillStarFill/>} text={ "명예의 전당" }/>
      <BlockButtons icon={<BsPlusCircleFill/>} text={ "더 많은 기부단체 보러가기" }/>
    </>
  )
}

export default DonateCelebrate
