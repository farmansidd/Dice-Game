import React from 'react';
import styled from 'styled-components';
import RoleDice from './RoleDice';
import Next from './Next';
import BackHome from './BackHome';

function Score() {
  const [selected, setSelected] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const [currentDice, setCurrentDice] = React.useState(1);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(randomNumber);
    if (selected === randomNumber) {
      setScore((prev) => prev + 1);
    }
  };

  return (
    <>
      <ScoreWrapper>
        <h1>{score}</h1>
        <p>Score</p>
      </ScoreWrapper>
      <RoleDice currentDice={currentDice} rollDice={rollDice} />
      <Next selected={selected} setSelected={setSelected} />
    </>
  );
}

export default Score;

const ScoreWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;

  h1 {
    font-size: 48px;
    font-weight: bold;
    line-height: 100px;
    margin-left: 0;
    margin-top: -10px;  
    padding-left: 14px;
  }

  p {
    font-size: 24px;
    font-weight: 500;
    margin-top: -50px;
  }
`;
