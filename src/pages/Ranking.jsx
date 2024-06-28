import React, { useState, useEffect } from 'react';
import { BsChatRightQuoteFill, BsFillTrophyFill, BsPersonFill } from "react-icons/bs";
import styled from 'styled-components';
import BlockButtons from '../components/BlockButtons';
import { useNavigate } from 'react-router-dom';
import PersonRanking from '../components/PersonRanking';
import getHallInfo from '../APIs/get/getHallInfo';
import axios from 'axios';


const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 9px 0 50px 36px;
  .icons{
    margin-right: 16px;
    width: 30px;
    height: 30px;
  }
`;

const Month = styled.div`
  font-size: ${({theme})=>theme.fontSizes.pageHeader};
  font-weight: ${({theme})=>theme.fontWeights.Bold};
`;

const Subject = styled.div`
  font-size: ${({theme})=>theme.fontSizes.imgText};
  font-weight: ${({theme})=>theme.fontWeights.Bold};
  margin-left: 9px;
`;

const PercentBox = styled.div`
  width: 170px;
  height: 120px;
  background-color: #333333;
  border-radius: 7px;
  margin-left: 50px;
`;

const AnimationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimationBox = styled.div`
  position: relative;
  width: 378px;
  height: 253px;
  /* background-color: #F1FCFF; */
  /* background-image: url('/images/basketBackground.png'); */
  background-size: cover; //이미지를 박스에 맞추기 위해
  background-repeat: no-repeat; //이미지 반복 제거
  /* overflow: hidden;  // 공이 박스를 벗어나지 않도록 설정 */
`;

const MoveBall = styled.img`
  position: absolute;
  width: 50px;  // 이미지 크기에 맞게 설정
  height: 50px; // 이미지 크기에 맞게 설정
  animation: moveBall 0.75s infinite ease-in-out; // 부드러운 전환 효과 추가
  
  @keyframes moveBall {
    0% {
      left: 0;
      bottom: 0;
    }
    12.5% {
      left: 12.5%;
      bottom: 35%;
    }
    25% {
      left: 25%;
      bottom: 70%;
    }
    37.5% {
      left: 37.5%;
      bottom: 85%;
    }
    50% {
      left: 50%;
      bottom: 100%;
    }
    62.5% {
      left: 62.5%;
      bottom: 85%;
    }
    75% {
      left: 75%;
      bottom: 70%;
    }
    87.5% {
      left: 87.5%;
      bottom: 35%;
    }
    100% {
      left: 100%;
      bottom: 0;
    }
  }
`;

const Dday = styled.div`
  font-family: ${({theme})=>theme.fonts.english};
  font-weight: 400;
  font-size: 39px;
  padding-top: 9px;
  padding-left: 13px;
  color: ${({theme})=>theme.colors.white};
`;

const Percent = styled.div`
  font-family: ${({theme})=>theme.fonts.english};
  font-weight: 400;
  font-size: 65px;
  padding-top: 3px;
  padding-right: 11px;
  color: #01B8E9;
  display: flex;
  justify-content: flex-end;
`;

const StyledBlockButton = styled(BlockButtons)`
  button {
    &:hover {
      opacity: 1; // 호버 효과 제거
    }
  }
`;

const HallMove = styled.button`
  font-size: 12px;
  font-weight: 700;
  color: #0055A5;
  cursor: pointer;
  border: none;
  background-color: #ffffff;
  margin-left: 230px;
`;

const calculateDday = () => {
  const today = new Date();
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const timeDiff = lastDayOfMonth - today;
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return daysDiff;
}

function Ranking() {
  const navigate = useNavigate();
  const [dday, setDday] = useState(calculateDday());
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  const [hallData, setHallData] = useState({}); // 명예의 전당 데이터 상태 추가
  const [backgroundImage, setBackgroundImage] = useState('');


  useEffect(() => {
    const timer = setInterval(() => {
      setDday(calculateDday());
    }, 1000 * 60 * 60 * 24);

    return () => clearInterval(timer);
  }, []);

  // useEffect(() => {
  //   async function fetchHallInfo() {
  //     try {
  //       const data = await getHallInfo(month); // 여기서 'jun'은 실제 월에 맞는 값으로 수정해야 합니다.
  //       setHallData(data);
  //       console.log(month);
  //       console.log("데이터: ", data);
  //       console.log("홀데이터: ", hallData);
  //     } catch (error) {
  //       console.error('명예의 전당 정보를 불러오는 중 오류 발생', error);
  //     }
  //   }

  //   fetchHallInfo();
  // }, []);

  useEffect(() => {
    // 이미지 데이터를 가져오는 API 호출
    setInterval(() => fetchImageData(), 100);
  }, [month]);
  const fetchImageData = async () => {
    try { 
      const response = await axios.get(`http://3.38.234.33:8000/api/accounts/fame/${month}`); // 여기에 실제 API 엔드포인트를 넣으세요
      setBackgroundImage(response.data.image);
      // console.log("데이터1: ", data);
      // console.log("홀데이터1: ", backgroundImage);
    } catch (error) {
      console.error("이미지 데이터를 가져오는 데 실패했습니다:", error);
    }
  };

  return (
    <>
      <Title>
        <BsChatRightQuoteFill className='icons'/>
        <Month>6월 기부</Month>
        <Subject>: 장애인 농구</Subject>
      </Title>
      <PercentBox>
        <Dday>D-{dday}</Dday>
        <Percent>56%</Percent>
      </PercentBox>
      <AnimationContainer>
        <AnimationBox style={{ backgroundImage: `url(http://3.38.234.33:8000/${backgroundImage})` }}>
          <MoveBall src="/images/moveBall.png" />
        </AnimationBox>
      </AnimationContainer>

      <StyledBlockButton icon={<BsFillTrophyFill />} text="6월 명예의 전당" />
      <HallMove onClick={() => navigate('/pastrankinglist')}>
        2024년 명예의 전당 보러 가기
      </HallMove>
      <PersonRanking />
    </>
  )
}

export default Ranking;
