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
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${({theme})=>theme.colors.black};

  flex-wrap: wrap;
  gap: 1.5vw;
`;

const DonationImage=styled.div`
  width: 340px;
  height: 190px;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.imgUrl});
  border-radius: 15px;
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
                    <DonationImage imgUrl={imgUrl}/>
                    <DonationText>
                        <DonationTextHeader>{subheading}</DonationTextHeader>
                        {contents}
                    </DonationText>
                </DonateDescription>
            </Container>
        </>
    )
}

export default DonationDetailContents