import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// import RiceBalloon from '../assets/images/rice_balloon.svg';
import ProcessTitle from '../components/ProcessTitle';
import ImageSliding from '../components/ImgSliding';

import DolLogo from '../images/DoL-Logo.png';
import TextLogoImg from '../images/smallLogo.png';
import img1 from '../images/service01.png';
import img2 from '../images/service02.png';
// import img3 from '../assets/images/Intro/2_waiting_component.svg';
// import img4 from '../assets/images/Intro/2_babyac_component.svg';
// import img5 from '../assets/images/Intro/2_finished_component.svg';
import img6 from '../images/service03.png';
import img7 from '../images/service04.png';

import { BsEmojiLaughingFill } from 'react-icons/bs';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../redux/userSlice.js';

const Scroll = styled.div``;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 40px;
`;
const LogoImage = styled.img`
    width: 210px;
    height: 210px;
`;
/* //밥풍선
const LogoImage = styled.img`
width: 181px;
height: 159px;
`; */

const TextLogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

const Title = styled.div`
    color: #333333;
`;
const Text1 = styled.div`
    font-weight: 700;
    font-size: 20px;
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;
/* const Text2 = styled.div`
font-Weight: 700;
font-size: 34px;
display: flex;
justify-content: center;
margin-top: 10px;
`; */
const Text3 = styled.div`
    font-weight: 500;
    font-size: 12px;
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;

const GraContainer1 = styled.div`
    background: linear-gradient(
        to bottom,
        #01B8E900 0%,
        #01B8E959 30%,
        #01B8E900 100%
    );
    height: 720px;
`;
const GraContainer2 = styled.div`
    background: linear-gradient(
        to bottom,
        #01B8E900 0%,
        #01B8E959 30%,
        #01B8E900 100%
    );
    height: 480px;
`;

const Container = styled.div`
    margin-top: 40px;
`;

const ImageSlidingContainer1 = styled.div`
    img {
        width: 290px !important; // 이미지 너비 조정
        height: 637px !important; // 이미지 높이 조정
        object-fit: cover; // 비율 유지
    }
`;

const ImageSlidingContainer2 = styled.div`
    img {
        width: 310px !important; // 이미지 너비 조정
        height: 165px !important; // 이미지 높이 조정
        object-fit: cover; // 비율 유지
    }
`;

const ImgDiv1 = styled.div`
    display: flex;
    justify-content: center; // 자식 요소를 가로 방향으로 가운데 정렬
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 290px;
    height: 400px;
`;

const ImgDiv2 = styled.div`
    display: flex;
    justify-content: center; // 자식 요소를 가로 방향으로 가운데 정렬
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 250px;
    height: 50px;
`;

const Text4 = styled.div`
    font-weight: 400;
    font-size: 18px;
    display: flex;
    justify-content: center;
    margin-top: 70px;
    color: #333333;
`;
const Text5 = styled.div`
    font-weight: 700;
    font-size: 18px;
    display: flex;
    justify-content: center;
    color: #333333;
    margin-bottom: 70px;
`;

const Buttondiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
`;

const CreateButton = styled.button`
    width: 329px;
    height: 50px;
    border: none;
    border-radius: 8px;
    background-color: #01B8E9;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.1s;

    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`;

function Intro() {
    const images1 = [img1, img2];
    // const images2 = [img3, img4, img5];
    const navigate = useNavigate();

    // const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Scroll>
            <LogoContainer>
                <LogoImage src={DolLogo} />
            </LogoContainer>

            <Title>
                <Text1>모금과 게임의 만남, 장애인 스포츠에 날개를!</Text1>

                <TextLogoContainer>
                    <img
                        src={TextLogoImg}
                        alt="TextLogoImg"
                        style={{ width: '135px' }}
                    />
                </TextLogoContainer>
            </Title>

            <GraContainer1>
                <Container>
                    <ProcessTitle
                        num="1"
                        title="e-sports를 통한 재밌는 기부"
                        text="게임 형식의 기부 방법을 제공해드려요!"
                    />
                    <ImageSlidingContainer1>
                        <ImageSliding images={images1} />
                    </ImageSlidingContainer1>
                </Container>
            </GraContainer1>

            <Container style={{height: '280px'}}>
                <ProcessTitle
                    num="2"
                    title="매달 새로운 기부게임 제공"
                    text="매달 새로운 기부게임을 제공해드려요!!"
                />
                <ImgDiv1>
                        <img src={img6} style={{ width: '307px', height: '196px' }} alt="월별 명예의 전당 리스트 사진" />
                </ImgDiv1>
                {/* <ImageSlidingContainer2>
                    <ImageSliding images={images2} />
                </ImageSlidingContainer2> */}
            </Container>

            <GraContainer2>
                <Container>
                    <ProcessTitle
                        num="3"
                        title="실시간 모금액, 나의 기부순위 확인"
                        text="실시간으로 모금 금액 달성률과 나의 기부 순위를 확인할 수 있어요!"
                    />
                    <ImgDiv1>
                        <img src={img7} alt="이달의 명예의 전당 사진" />
                    </ImgDiv1>
                </Container>
            </GraContainer2>
{/* 
            <Container>
                <ProcessTitle
                    num="4"
                    title="보은 밥약 생성"
                    text="보은하기를 통해 즐거웠던 밥약을 다시 만들 수 있어요!"
                />
                <ImgDiv2>
                    <img src={img7} alt="보은 버튼" />
                </ImgDiv2>
            </Container> */}

            <Text4>무료로 이용이 가능합니다!!</Text4>
            <Text5>즐거운 기부, DoL을 이용하러 가볼까요??</Text5>
            <Buttondiv>
                <CreateButton
                    onClick={() =>
                        navigate('/main')
                    }
                >
                    <BsEmojiLaughingFill
                        size="24px"
                        style={{ marginRight: '10px' }}
                    />
                    서비스 이용하러 가기!!
                </CreateButton>
            </Buttondiv>
        </Scroll>
    );
}

export default Intro;
