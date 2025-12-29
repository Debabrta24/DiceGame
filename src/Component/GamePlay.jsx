import React, { useState } from "react";
import { TotalScore } from "./TotalScore";
import { Numberelector } from "./Numberelector";
import styled from "styled-components";
import { RollDice } from "./RollDice";

export const GamePlay = () => {
  const [selectedNumber, setelectedNumber] = useState();

  const [currentDice, setcurrentDice] = useState(1);
  return (
    <MainContainer>
      <div className="topSection">
        <TotalScore />
        <Numberelector
          selectedNumber={selectedNumber}
          setelectedNumber={setelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} setcurrentDice={setcurrentDice} />
    </MainContainer>
  );
};

const MainContainer = styled.main`
  padding: 17px;
  .topSection {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
`;
