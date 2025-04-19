import React from 'react'
import styled from 'styled-components';

function RoleDice() {
    const [currentDice, setCurrentDice] = React.useState(1);
    const genrendomNumber = (min, max) => {
        console.log( Math.floor(Math.random() * (max - min + 1)) + min)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
     const Rendom = () => {
        const randomNumber = genrendomNumber(1, 6);
        setCurrentDice((prev) => randomNumber);
    };

    return (
        <>
            <DiceContainer>
                <div className="diceimg" onClick={Rendom}>
                <img src={`/dice_${currentDice}.png`} alt="" />
              
                </div>
                <p>Click on Dice to roll</p>
            </DiceContainer>
           
        </>
      
    )
}

export default RoleDice
const DiceContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 17%;

.diceimg {
    cursor: pointer;
}
`
