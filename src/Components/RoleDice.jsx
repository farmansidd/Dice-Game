import React from 'react';
import styled from 'styled-components';

function RoleDice({ currentDice, rollDice }) {
  return (
    <>
      <DiceContainer>
        <div className="diceimg" onClick={rollDice}>
          <img src={`/dice_${currentDice}.png`} alt={`Dice ${currentDice}`} />
        </div>
        <p>Click on Dice to roll</p>
      </DiceContainer>
    </>
  );
}

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 17%;

  .diceimg {
    cursor: pointer;
  }
`;
