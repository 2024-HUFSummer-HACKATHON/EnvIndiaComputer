import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  /* margin: 26px auto; */
  width: 340px;
  height: 55px;
  border: none;
  border-radius: 15px;

  color: ${({ theme, textColor }) => textColor || theme.colors.white}; /* textColor prop을 통해 색상을 받아옵니다. */
  background-color: ${({ bgColor }) => bgColor || '#01B8E9'};
  font-weight: ${({ theme }) => theme.fontWeights.Bold};
  font-size: ${({ theme }) => theme.fontSizes.BtnText};
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

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

function BlockButtons({ text, icon, bgColor, textColor, onClick }) {
  return (
    <Button bgColor={bgColor} textColor={textColor} onClick={onClick}>
      <Icon>{icon}</Icon>
      {text}
    </Button>
  );
}

export default BlockButtons;
