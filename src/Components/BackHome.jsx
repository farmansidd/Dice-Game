import React from 'react';
import styled from 'styled-components';

const BackButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-top: 10%;

  &:hover {
    background-color: #222;
  }
`;

function BackHome({ toggle }) {
  return (
    <BackButton onClick={toggle}>
      Back to HeroSection
    </BackButton>
  );
}

export default BackHome;
