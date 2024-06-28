import React from 'react'
import { BsChatRightQuoteFill, BsArrowRightCircleFill, BsFillTrophyFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

import BaseBall from '../images/base.png'; // 이미지 파일을 가져옵니다

import BlockButtons from '../components/BlockButtons';

import styled from 'styled-components';
import DonationDetailContents from '../components/DonationDetailContents';

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
`;

const DonationImage=styled.div`
  background-image: url(${BaseBall}); // 이미지를 동적으로 삽입
`;

const DonationText=styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  /* flex-wrap:wrap;
  gap:1vw; */
  color:${({theme})=>theme.colors.black};

  padding-left: 1.5vw;
  letter-spacing: 0.1vw;

  max-width: 300px;

  word-wrap: normal;
  word-break: keep-all;
  line-height: 1.4;
  border-left: 5px solid ${({ theme }) => theme.colors.black};

  font-size:${({theme})=>theme.fontSizes.detailText};
`;

const DonationTextHeader=styled.p`
  font-weight:bold;
  margin:auto auto auto 0px;
`;
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
  margin:auto auto auto 0px;
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

        <DonationDetailContents 
          subheading='소제목테스트' 
          contents='test내용물'
        />

        {/* <DonateDescription>
          <DonationImage></DonationImage>
          <DonationText>
            <DonationTextHeader>소제목01</DonationTextHeader>
            신체적으로 불편한 학우들이 학교의 계단, 여닫이 문 등으로 인한 불편함을 겪지 않도록 시설 개선을 위한 모금
          </DonationText>
        </DonateDescription> */}

        <DonationButton
          onClick={() => navigate('/donate/completed')}
        >
          <BsArrowRightCircleFill className='icons'/>
            기부하러가기
        </DonationButton>
        <BlockButtons 
          icon={<BsFillTrophyFill />} 
          text="명예의 전당" 
          onClick={() => navigate('/ranking')}
        />
      </Container>
    </>
  )
}

export default Donate
