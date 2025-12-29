import styled from "styled-components";

export const RollDice = ({ roleDice, currentDice }) => {
  
  
    return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/dice_${currentDice}.png`} alt="Dice 1" />
      </div>
      <p>Click to Roll</p>
    </DiceContainer>
  );
};

const DiceContainer = styled.div`
  .dice {
    cursor: pointer;
  }
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 24px;
  }
`;
