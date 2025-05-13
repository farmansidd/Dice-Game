import React from 'react';
import styled from 'styled-components';
import Score from './Score';
import BackHome from './BackHome';
import GameRules from './GameRules';

const GameplayContainer = styled.div`
  min-height: 100vh;
  position: relative;
  background-color: ${props => props.theme.colors.light};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const GameTitle = styled.h2`
  font-size: 24px;
  color: ${props => props.theme.colors.primary};
  margin: 0;
`;

function Gameplay({ toggle }) {
  const [showRules, setShowRules] = React.useState(false);
  
  const toggleRules = () => {
    setShowRules(prev => !prev);
  };
  
  return (
    <GameplayContainer>
      <TopBar>
        <GameTitle>Dice Game</GameTitle>
        <BackHome toggle={toggle} />
      </TopBar>
      
      {showRules && <GameRules onClose={toggleRules} />}
      <Score toggleRules={toggleRules} />
    </GameplayContainer>
  );
}

export default Gameplay;
