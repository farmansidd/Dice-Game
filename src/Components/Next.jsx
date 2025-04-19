import React from 'react';
import styled from 'styled-components';

function Next({
  selected,
  setSelected,
}) {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  return (
    <Wrapper>
      <BoxContainer>
        {arrNumber.map((value, index) => (
          <Box
            $isSelected={value === selected}
            key={index}
            onClick={() => setSelected(value)}
          >
            {value}
          </Box>
        ))}
      </BoxContainer>
      <InstructionText>Select Number</InstructionText>
    </Wrapper>
  );
}

export default Next;

// Styled Components
const Wrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const BoxContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 2px solid #000;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${(props) => (props.$isSelected ? '#000000' : '#f4f4f4')};
  color: ${(props) => (props.$isSelected ? '#ffffff' : '#000000')};

  &:hover {
    background-color: ${(props) => (props.$isSelected ? '#000000' : '#e0e0e0')};
  }
`;

const InstructionText = styled.p`
  margin-top: 20px;
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-right: 35%;
`;
