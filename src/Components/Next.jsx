import React from 'react';
import styled from 'styled-components';

function Next({
  selected,
  setSelected,
}) {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  return (
    <Wrapper>
      <InstructionText>Select Number</InstructionText>
      <BoxContainer>
        {arrNumber.map((value) => (
          <Box
            $isSelected={value === selected}
            key={value}
            onClick={() => setSelected(value)}
          >
            {value}
          </Box>
        ))}
      </BoxContainer>
    </Wrapper>
  );
}

export default Next;

// Styled Components
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const BoxContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 16px;
`;

const Box = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid ${props => props.$isSelected ? props.theme.colors.primary : props.theme.colors.dark};
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  border-radius: ${props => props.theme.borderRadius.medium};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};
  background-color: ${props => props.$isSelected ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.$isSelected ? props.theme.colors.white : props.theme.colors.dark};
  box-shadow: ${props => props.$isSelected ? props.theme.shadows.medium : 'none'};

  &:hover {
    background-color: ${props => props.$isSelected ? props.theme.colors.primary : props.theme.colors.light};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const InstructionText = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.theme.colors.dark};
  text-align: center;
`;
