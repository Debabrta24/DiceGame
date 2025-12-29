import React, { useState } from "react";
import { TotalScore } from "./TotalScore";
import { Numberelector } from "./Numberelector";
import styled from "styled-components";
import { RollDice } from "./RollDice";
import { Button, OutlineButton } from "../Styled/Button";
import { Rules } from "./Rules";

export const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setelectedNumber] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRule] = useState(false);
  const genarateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    const randomNumber = genarateRandomNumber(1, 7);
    setcurrentDice((prev) => randomNumber);
    if (!selectedNumber) {
      setError("You have not selected any number ");
      return;
    }
    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="topSection">
        <TotalScore score={score} />
        <Numberelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setelectedNumber={setelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setShowRule((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} rules
        </Button>
      </div>
      {showRules && <Rules />}
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
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* max-width: 220px; */
    align-items: center;
    gap: 10px;
  }
`;
