import React, { useState, useEffect } from 'react';
import { BsChatRightQuoteFill, BsArrowRightCircleFill, BsFillTrophyFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

import BaseBall from '../images/base.png'; // 이미지 파일을 가져옵니다

import BlockButtons from '../components/BlockButtons';

import styled from 'styled-components';
import DonationDetailContents from '../components/DonationDetailContents';
import axios from 'axios';

const Container=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  flex-wrap: wrap;
  gap: 1vw;
`;

const MarginSetting=styled.div`
    margin-bottom: 3vw;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  flex-wrap: wrap;
  gap: 1vw;

  font-size: ${({theme})=>theme.fontSizes.pageHeader};
  font-weight: ${({theme})=>theme.fontWeights.Bold};
  width: 80%;
  .icons{
    width: 24px;
    height: 24px;
  }
`;
const Topic = styled.div`
  font-size: 26px;
  font-weight: ${({theme})=>theme.fontWeights.Bold};
`;

const Contents=styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap:1.5vw;
  align-items: center;

  p{
    letter-spacing: 0.1vw;
    max-width: 300px; /* 너비를 270px로 제한 */

    word-wrap: normal; 
    /* 기본적으로 공백에서 줄바꿈 */
    /* 단어단위로 줄바꿈(단어 중간에 줄바꿈하지 않음) */
    /* word-break: keep-all;  */
    word-break: break-all;
    line-height: 1.4; /* 라인 간격을 1.2로 설정 */
  }
`;

const DonationButton = styled.button`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1vw;
  align-items: center;
  border: none;

  background-color: transparent;

  font-size: ${({theme})=>theme.fontSizes.imgText};
  font-weight: ${({theme})=>theme.fontWeights.Bold};
  /* cursor: pointer; */
  &:hover {
      opacity: 0.5;
    }

  .icons{
    width: 24px;
    height: 24px;
  }
`;

function Donate() {
  const navigate=useNavigate();
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;

  // main page - 데이터 상태 추가
  const [mainImg, setMainImg]=useState({});

  useEffect(()=>{
    setInterval(()=>fetchImageData(),100);
  },[month]);
  // img와 content 가져오는 API 호출
  const fetchImageData = async () => {
    try{
      const response=await axios.get(`http://3.38.234.33:8000//api/donates/main/${month}`);
      setMainImg(response.data.image);
      // console.log('데이터 : ', data);
    } catch(error){
      console.log('Main page - 이미지 데이터를 가져오는 데 실패')
    }
  };

  return (
    <>
      <Container>
        <Title>
          <BsChatRightQuoteFill 
            className='icons'
            />
          6월 기부
          <Topic>
            : 휠체어 농구
          </Topic>
        </Title>
        <Contents>
          <DonationDetailContents
            imgUrl='http://3.38.234.33:8000/media/detail/wheelchair_basketball.png'
            subheading='휠체어 농구란 무엇인가요?' 
            contents='휠체어 농구는 신체 장애인이 휠체어를 타고 하는 농구로 농구를 변형한 종목입니다. 비장애인 올림픽에서 폐막식 직전에 대개 축구 결승전을 하는 것처럼 패럴림픽에서는 마지막 날에 대개 휠체어 농구 경기가 진행될 정도로 장애인 스포츠의 꽃으로 불리는 종목입니다.
  휠체어농구의 규칙은 대체로 농구와 비슷합니다. 코트 크기와 바스켓 높이가 비장애인 농구와 똑같으며, 차이점은 이동 페널티를 받지 않으려면 휠체어의 바퀴를 두 번 밀 때마다 공을 패스하거나 드리블을 해야 합니다.'
          />

          <DonationDetailContents 
            imgUrl="http://3.38.234.33:8000/media/detail/obesity_chart.png"
            subheading='장애인에게 스포츠 활동은 왜 필요한가요?' 
            contents='장애 정체성을 받아들인다는 건 결국 내 몸이 마비되고 변형되고 절단된 부분까지도 담담하게 하나의 특징으로 이해하는 것입니다. 운동을 하며 몸의 변화를 지켜보는 과정이 도움이 됩니다. 
  장애인의 건강보건통계에 따르면 장애인의 비만율(체질량 지수(kg/㎡)가 25 이상)은 비장애인보다 전연령대에서 높은 것을 확인할 수 있습니다 주요 질환 발병률이 고혈압 2.2배, 당뇨 2.5배 높은 것으로 나타났습니다. 장애인에게 현재의 건강 상태를 유지하고 남아있는 기능적인 움직임을 증진하기 위해 잘 계획된 운동이 반드시 필요합니다.'
          />

          <DonationDetailContents
            imgUrl='http://3.38.234.33:8000/media/detail/fire_basketball.jpg'
            subheading='모금액은 어디에 쓰이나요?' 
            contents='푸르메재단은 장애인들이 건강하고 행복한 삶을 누릴 수 있도록 다양한 지원을 제공하는 비영리 공익 재단입니다. DoL은 푸르메재단이 주최하는 장애인의 스포츠 활동을 지원하는 캠페인에 모금을 진행합니다. 이 캠페인은 장애인들이 스포츠를 통해 건강을 증진하고 사회와의 소통을 활발히 할 수 있도록 돕는 것을 목표로 하고 있습니다. 
  DoL과 함께 장애인의 스포츠 권리를 지원하고, 그들이 땀 흘리며 꿈을 이루는 모습을 응원해 주세요. 
  여러분의 작은 손길이 큰 변화를 만듭니다.'
          />
        </Contents>

        <DonationButton
          onClick={() => navigate('/donate/completed')}
        >
          <BsArrowRightCircleFill className='icons'/>
            기부하러가기
        </DonationButton>
        <MarginSetting>
          <BlockButtons 
            icon={<BsFillTrophyFill />} 
            text="명예의 전당" 
            onClick={() => navigate('/ranking')}
          />
        </MarginSetting>
      </Container>
    </>
  )
}

export default Donate
