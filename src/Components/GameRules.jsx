import React from 'react';
import styled from 'styled-components';

const RulesOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const RulesCard = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: 30px;
  max-width: 500px;
  width: 90%;
  box-shadow: ${props => props.theme.shadows.large};
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${props => props.theme.colors.dark};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const RulesTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 20px;
  font-size: 24px;
`;

const RulesList = styled.ul`
  list-style-position: inside;
  margin-bottom: 20px;
  
  li {
    margin-bottom: 10px;
    line-height: 1.5;
  }
`;

function GameRules({ onClose }) {
  return (
    <RulesOverlay onClick={onClose}>
      <RulesCard onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <RulesTitle>How to Play</RulesTitle>
        <RulesList>
          <li>Select a number from 1 to 6</li>
          <li>Click on the dice to roll it</li>
          <li>If the dice shows your selected number, you score a point</li>
          <li>Try to reach the target score to win</li>
          <li>You can adjust the target score before starting</li>
          <li>Use the reset button to start a new game</li>
        </RulesList>
      </RulesCard>
    </RulesOverlay>
  );
}

export default GameRules;