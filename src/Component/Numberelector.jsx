import React, { useState } from "react";
import styled from "styled-components";
export const Numberelector = () => {
  const arryNumber = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setelectedNumber] = useState();
  //   console.log(selectedNumber);
  return (
    <NumberSelectorContainer>
      <div className="flex">
        {arryNumber.map((value, i) => (
          <Box
            isSelected={value == selectedNumber}
            key={i}
            onClick={() => setelectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
`;
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
