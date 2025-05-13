import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px;
  background-color: ${props => props.theme.colors.light};
  min-height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 40px;
  }
`;

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: float 6s ease-in-out infinite;

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    filter: drop-shadow(0 10px 15px rgba(0,0,0,0.2));
    transition: transform ${props => props.theme.transitions.medium};
    
    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;
    
    img {
      max-width: 300px;
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
  }
`;

const Heading = styled.h1`
  font-size: clamp(48px, 8vw, 94px);
  font-weight: 800;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 24px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  letter-spacing: -1px;
  
  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 32px;
  color: ${props => props.theme.colors.dark};
  max-width: 500px;
  line-height: 1.6;
`;

const Button = styled.button`
  padding: 16px 36px;
  font-size: 18px;
  font-weight: 600;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: ${props => props.theme.borderRadius.medium};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};
  box-shadow: ${props => props.theme.shadows.medium};

  &:hover {
    background-color: ${props => props.theme.colors.dark};
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.large};
  }
  
  &:active {
    transform: translateY(0);
  }
`;

function HeroSection({toggle}) {
  return (
    <HeroWrapper>
      <HeroImage>
        <img src="/dices (1).png" alt="Dice" />
      </HeroImage>
      <HeroContent>
        <Heading>DICE GAME</Heading>
        <Subtitle>
          Test your luck with our exciting dice game! Select a number, roll the dice, 
          and score points when your prediction matches the outcome.
        </Subtitle>
        <Button onClick={toggle}>Play Now</Button>
      </HeroContent>
    </HeroWrapper>
  );
}

export default HeroSection;
