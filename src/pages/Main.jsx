import React from 'react'
import { BsChatRightQuoteFill, BsArrowRightCircleFill, BsFillTrophyFill, BsPersonFill } from "react-icons/bs";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import BlockButtons from '../components/BlockButtons';

const Container=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  flex-wrap: wrap;
  gap: 2vw;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  /* margin: 9px 0 27px 45px; */
  .icons{
    margin-right: 16px;
    width: 30px;
    height: 30px;
  }

  color:${({theme})=>theme.colors.black};
  font-size: ${({theme})=>theme.fontSizes.pageHeader};
  font-weight: ${({theme})=>theme.fontWeights.header};

`;
const ContentImg = styled.div`
  margin: 0 44px;
  width: 340px;
  height: 190px; //나중에 api연동하고나면 height빼기-이미지 크기에 맞게 늘어나게끔하기위해

  border-radius: 35px;
  display: flex;
  justify-content: center;
  background-image: url('/images/Basketball.png');
  background-size: 340px auto; /* 이미지 너비를 340px로 설정 */
`
const ContentText = styled.div`
  padding-left:3vw;

  letter-spacing: 0.1vw;
  max-width: 300px; /* 너비를 270px로 제한 */
  margin-top: 20px;
  /* text-align: center; 문단 가운데 정렬 */

  word-wrap: normal; /* 기본적으로 공백에서 줄바꿈 */
  word-break: keep-all; /* 단어단위로 줄바꿈(단어 중간에 줄바꿈하지 않음) */
  line-height: 1.4; /* 라인 간격을 1.2로 설정 */

  border-left: 5px solid ${({theme})=>theme.colors.black};
`

const GotoDonation = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 48px 0 22px 48px;
  border: none;
  background-color: transparent;

  color: ${({theme})=>theme.colors.black};
  font-size: ${({theme})=>theme.fontSizes.gotoDonation};
  font-weight: ${({theme})=>theme.fontWeights.Bold};

  text-decoration:none;
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
      <Container>
        <Title>
          <BsChatRightQuoteFill className='icons'/>
            7월 기부
        </Title>

        <ContentImg>
        </ContentImg>
        <ContentText>
            신체적으로 불편한 학우들이 학교의 계단, 여닫이 문 등으로 인한 불편함을 겪지 않도록 시설 개선을 위한 모금
          </ContentText>
        <Link to={'/donate'}>
          <GotoDonation>
            <BsArrowRightCircleFill className='icons'/>
              기부하러 가기
          </GotoDonation>
        </Link>
        <Link to={'/ranking'}>
          <BlockButtons icon={<BsFillTrophyFill/>} text={ "명예의 전당" }/>
        </Link>
      </Container>
    </>
  )
}

export default Main
