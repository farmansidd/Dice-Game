import React from 'react';
import styled from 'styled-components';

const BackButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: ${props => props.theme.borderRadius.medium};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &::before {
    content: '←';
    font-size: 18px;
  }
`;

function BackHome({ toggle }) {
  return (
    <BackButton onClick={toggle}>
      Back to Home
    </BackButton>
  );
}

export default BackHome;
