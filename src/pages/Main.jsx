import React from 'react';
import { BsChatRightQuoteFill, BsArrowRightCircleFill, BsFillTrophyFill } from "react-icons/bs";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import BlockButtons from '../components/BlockButtons';

import BaseBall from '../images/base.png'; // 이미지 파일을 가져옵니다

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2vw;

  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* text-align: left;  */
  /* 왼쪽 정렬 추가 */

  width: 80%;

  flex-wrap: wrap;
  gap: 1vw;

  /* padding: 1vw; */

  .icons {
    width: 30px;
    height: 30px;
  }

  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.pageHeader};
  font-weight: ${({ theme }) => theme.fontWeights.Bold};
`;

const ImageContent=styled.div`
  display: flex;
  flex-direction: column;

  /* width: 80%;
  height: 100%; */
  /* width: 100%; */
  width: 340px;
  height: 190px;

  border-radius: 35px;
  padding: 1.5vw;

  color:white;
  font-size: ${({theme})=>theme.fontSizes.imgText};
  font-weight: ${({theme})=>theme.fontWeights.Bold};
  
  height: auto;
  background-image: url(${BaseBall}); // 이미지를 동적으로 삽입
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; /* 이미지가 반복되지 않도록 설정 */

  .icon{
    margin: auto 0px auto auto;
  }
`;

const ContentText = styled.div`
  padding-left: 1.5vw;
  letter-spacing: 0.1vw;

  max-width: 300px;

  word-wrap: normal;
  word-break: keep-all;
  line-height: 1.4;
  border-left: 5px solid ${({ theme }) => theme.colors.black};

`;

const GotoDonation = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left; /* 왼쪽 정렬 추가 */
  
  width: 80%;

  border: none;
  background-color: transparent;
  flex-wrap: wrap;
  gap: 1vw;

  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.gotoDonation};
  font-weight: ${({ theme }) => theme.fontWeights.Bold};
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    opacity: 0.5;
  }

  .icons {
    margin-right: 16px;
    width: 24px;
    height: 24px;
  }
`;

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Title>
          <BsChatRightQuoteFill className='icons' />
          6월 기부
        </Title>
        <ImageContent>
          <BsArrowRightCircleFill className='icon'/>
          장애인 농구
        </ImageContent>

        <ContentText>
          신체적으로 불편한 학우들이 학교의 계단, 여닫이 문 등으로 인한 불편함을 겪지 않도록 시설 개선을 위한 모금
        </ContentText>
        <GotoDonation onClick={() => navigate('/donate')}>
          <BsArrowRightCircleFill />
          기부하러가기
        </GotoDonation>
        <BlockButtons 
          icon={<BsFillTrophyFill />} 
          text="명예의 전당" 
          onClick={() => navigate('/ranking')} 
        />
      </Container>
    </>
  );
}

export default Main;
