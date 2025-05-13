import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const rollAnimation = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  25% { transform: rotate(90deg) scale(1.1); }
  50% { transform: rotate(180deg) scale(1); }
  75% { transform: rotate(270deg) scale(1.1); }
  100% { transform: rotate(360deg) scale(1); }
`;

const bounceAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
`;

function RoleDice({ currentDice, rollDice }) {
  const [isRolling, setIsRolling] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (isRolling) {
      const timer = setTimeout(() => {
        setIsRolling(false);
        setShowAnimation(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
    
    if (showAnimation) {
      const timer = setTimeout(() => {
        setShowAnimation(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isRolling, showAnimation]);

  const handleRoll = () => {
    if (!isRolling) {
      setIsRolling(true);
      rollDice();
      playRollSound();
    }
  };

  const playRollSound = () => {
    try {
      const audio = new Audio('/dice-roll-sound.mp3');
      audio.play().catch(e => console.log('Audio play failed:', e));
    } catch (error) {
      console.log('Error playing sound:', error);
    }
  };

  return (
    <DiceContainer>
      <DiceWrapper 
        className={isRolling ? 'rolling' : showAnimation ? 'bouncing' : ''}
        onClick={handleRoll}
        disabled={isRolling}
      >
        <img src={`/dice_${currentDice}.png`} alt={`Dice ${currentDice}`} />
      </DiceWrapper>
      <InstructionText>Click on Dice to roll</InstructionText>
    </DiceContainer>
  );
}

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
`;

const DiceWrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: ${props => props.theme.borderRadius.medium};
  transition: all ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  &:disabled {
    cursor: not-allowed;
  }
  
  img {
    width: 120px;
    height: 120px;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
  }
  
  &.rolling {
    animation: ${rollAnimation} 1s linear;
  }
  
  &.bouncing {
    animation: ${bounceAnimation} 1s ease;
  }
`;

const InstructionText = styled.p`
  margin-top: 16px;
  font-size: 16px;
  color: ${props => props.theme.colors.dark};
  font-weight: 500;
`;
