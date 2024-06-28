import React from 'react'
import styled from 'styled-components';
import { BsChatRightQuoteFill, BsArrowRightCircleFill, BsFillTrophyFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

import BaseBall from '../images/base.png'; // 이미지 파일을 가져옵니다
const Container=styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 3vw;

    align-items: center;
    margin: auto auto auto 0px;
`;

const DonateDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  color: ${({theme})=>theme.colors.black};
`;

const DonationImage=styled.div`
  background-image: url(${BaseBall}); // 이미지를 동적으로 삽입
`;

const DonationText=styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
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
function DonationDetailContents({imgUrl,subheading,contents}){
    // const Header={subheading}
    // const Content={contents}
    return(
        <>
            <Container>
                <DonateDescription>
                    <DonationImage>
                      <img url='{imgUrl}' />
                    </DonationImage>
                    <DonationText>
                        <DonationTextHeader>{subheading}</DonationTextHeader>
                        {/* <DonationTextHeader>소제목01</DonationTextHeader> */}
                        {contents}
                        {/* 신체적으로 불편한 학우들이 학교의 계단, 여닫이 문 등으로 인한 불편함을 겪지 않도록 시설 개선을 위한 모금 */}
                    </DonationText>
                </DonateDescription>
            </Container>
        </>
    )
}

export default DonationDetailContents