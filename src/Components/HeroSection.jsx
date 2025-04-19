import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px;
  background-color: #fff;
  max-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 40px;
  }
`;

const HeroImage = styled.div`
  flex: 1;

  img {
    width: 100%;
    max-width: 900px;
    height: auto;
    display: block;
  }

  @media (max-width: 768px) {
    img {
      max-width: 300px;
      margin: 0 auto;
    }
  }
`;

const HeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 60px;

  @media (max-width: 768px) {
    padding-left: 0;
    align-items: center;
    margin-top: 40px;
  }
`;

const Heading = styled.h1`
  font-size: 94px;
  font-weight: 800;
  color: #000;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

const Button = styled.button`
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #222;
  }
`;

function HeroSection({toggle} ) {
  return (
    <HeroWrapper>
      <HeroImage>
        <img src="/dices (1).png" alt="Dice" />
      </HeroImage>
      <HeroContent>
        <Heading>DICE GAME</Heading>
        <Button onClick={toggle}>Play Now</Button>
      </HeroContent>
    </HeroWrapper>
  );
}

export default HeroSection;
