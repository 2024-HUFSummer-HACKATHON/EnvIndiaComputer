import { Link,Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    overflow: auto;
    height: 100vh; /* Container가 뷰포트의 전체 높이를 차지하도록 설정 */
`;

const Content=styled.div`
    position: relative; /* Footer를 절대 위치시키기 위해 Content를 상대 위치로 설정 */
    width:100%;
    max-width:428px;
    min-height:100vh;
    overflow:auto;
    box-shadow:0px 0px 32px #0000002f;
    background-color: #ffffff;
    //padding-bottom: 260px; //footer높이만큼 패딩 줘야함. 그래야 내용 다보임.
`;

const Header=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:40px;
    padding:16px 20px;
    background-color: #FFFBF1;
    margin-bottom: 30px;
`;
const Footer=styled.div`
    position: absolute; /* Footer를 절대 위치로 설정 */
    bottom: 0; /* Footer를 Content의 맨 아래에 위치시킴 */
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-bottom: 26px;
    margin-top: auto;

`
const Text=styled.div`
    width: 100%;
    text-align: center;
    
`


const Mobile=()=>{
    return(
        <>
            <Container>
                <Content>
                    <Header>
                        헤더
                    </Header>
                    <Outlet /> 
                    <Footer>
                        <Text>
                            ⓒ 2024. 친환경인도컴퓨터. All rights reserved.
                        </Text>
                    </Footer>
                </Content>
            </Container>
        </>
    )
};

export default Mobile;