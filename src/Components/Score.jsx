import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RoleDice from './RoleDice';
import Next from './Next';

function Score({ toggleRules }) {
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [rollCount, setRollCount] = useState(0);
  const [targetScore, setTargetScore] = useState(5);
  const [gameOver, setGameOver] = useState(false);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('diceGameHighScore');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  useEffect(() => {
    if (gameOver && score > highScore) {
      setHighScore(score);
      localStorage.setItem('diceGameHighScore', score.toString());
      showNotification('New High Score!', 'success');
    }
  }, [gameOver, score, highScore]);

  const showNotification = (msg, type) => {
    setMessage(msg);
    setMessageType(type);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const rollDice = () => {
    if (gameOver) return;
    if (selected === null) {
      showNotification('Please select a number first!', 'warning');
      return;
    }
    
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(randomNumber);
    setRollCount((prev) => prev + 1);
    
    if (selected === randomNumber) {
      setScore((prev) => {
        const newScore = prev + 1;
        if (newScore >= targetScore) {
          setGameOver(true);
          showNotification('Congratulations! You won!', 'success');
        } else {
          showNotification('You scored a point!', 'success');
        }
        return newScore;
      });
    }
  };

  const resetGame = () => {
    setSelected(null);
    setScore(0);
    setCurrentDice(1);
    setRollCount(0);
    setGameOver(false);
    showNotification('Game reset!', 'info');
  };

  return (
    <GameContainer>
      {showMessage && (
        <Notification $type={messageType}>
          {message}
        </Notification>
      )}
      
      <ScoreBoard>
        <ScoreSection>
          <ScoreValue>{score}</ScoreValue>
          <ScoreLabel>Current Score</ScoreLabel>
        </ScoreSection>
        
        <ScoreSection>
          <ScoreValue>{highScore}</ScoreValue>
          <ScoreLabel>High Score</ScoreLabel>
        </ScoreSection>
      </ScoreBoard>
      
      <StatsContainer>
        <StatItem>
          <StatLabel>Rolls:</StatLabel>
          <StatValue>{rollCount}</StatValue>
        </StatItem>
        
        <StatItem>
          <StatLabel>Target Score:</StatLabel>
          <TargetInput
            type="number"
            min="1"
            max="20"
            value={targetScore}
            onChange={(e) => setTargetScore(Number(e.target.value))}
            disabled={gameOver || rollCount > 0}
          />
        </StatItem>
      </StatsContainer>
      
      <Next selected={selected} setSelected={setSelected} />
      
      <RoleDice currentDice={currentDice} rollDice={rollDice} />
      
      <ButtonContainer>
        <ActionButton onClick={resetGame}>Reset Game</ActionButton>
        <ActionButton $secondary onClick={toggleRules}>Game Rules</ActionButton>
      </ButtonContainer>
      
      {gameOver && (
        <GameOverMessage>
          <h2>Congratulations!</h2>
          <p>You reached the target score in {rollCount} rolls.</p>
        </GameOverMessage>
      )}
    </GameContainer>
  );
}

export default Score;

// Styled Components
const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const Notification = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 24px;
  border-radius: ${props => props.theme.borderRadius.medium};
  background-color: ${props => {
    switch(props.$type) {
      case 'success': return props.theme.colors.success;
      case 'warning': return props.theme.colors.warning;
      case 'error': return props.theme.colors.error;
      default: return props.theme.colors.primary;
    }
  }};
  color: white;
  font-weight: 600;
  box-shadow: ${props => props.theme.shadows.medium};
  z-index: 100;
  animation: fadeIn 0.3s, fadeOut 0.3s 2.7s;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translate(-50%, -20px); }
    to { opacity: 1; transform: translate(-50%, 0); }
  }
  
  @keyframes fadeOut {
    from { opacity: 1; transform: translate(-50%, 0); }
    to { opacity: 0; transform: translate(-50%, -20px); }
  }
`;

const ScoreBoard = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 30px;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.large};
  padding: 20px;
  box-shadow: ${props => props.theme.shadows.medium};
`;

const ScoreSection = styled.div`
  text-align: center;
  padding: 0 20px;
`;

const ScoreValue = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 8px;
`;

const ScoreLabel = styled.p`
  font-size: 16px;
  color: ${props => props.theme.colors.dark};
  font-weight: 500;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const StatLabel = styled.span`
  font-weight: 600;
  margin-right: 10px;
`;

const StatValue = styled.span`
  font-weight: 500;
`;

const TargetInput = styled.input`
  width: 60px;
  padding: 8px;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.small};
  font-size: 16px;
  text-align: center;
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const ActionButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  background-color: ${props => props.$secondary ? props.theme.colors.dark : props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: ${props => props.theme.borderRadius.medium};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.medium};
    background-color: ${props => props.$secondary ? '#333' : props.theme.colors.primary + 'dd'};
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const GameOverMessage = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: ${props => props.theme.colors.success + '20'};
  border: 2px solid ${props => props.theme.colors.success};
  border-radius: ${props => props.theme.borderRadius.medium};
  text-align: center;
  
  h2 {
    color: ${props => props.theme.colors.success};
    margin-bottom: 10px;
  }
  
  p {
    font-size: 18px;
  }
`;
