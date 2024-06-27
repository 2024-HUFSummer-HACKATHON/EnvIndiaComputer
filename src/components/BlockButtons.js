import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 26px auto;
    background-color: #FFFBF1;
    width: 340px;
    height: 55px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
`
const Icon = styled.div`
    margin-left: 14px;
    margin-right: 16px;
    width: 24px;
    height: 24px;
    & > svg {
        width: 24px;
        height: 24px;
    }
`;

function BlockButtons({ text, icon }) {
  return (
    <>
      <Button>
        <Icon>{icon}</Icon>
        {text}
      </Button>
    </>
  )
}

export default BlockButtons
