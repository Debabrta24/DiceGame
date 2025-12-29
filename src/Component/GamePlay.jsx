import React from "react";
import { TotalScore } from "./TotalScore";
import { Numberelector } from "./Numberelector";
import styled from "styled-components";

export const GamePlay = () => {
  return (
    <MainContainer>
      <div className="topSection">
        <TotalScore />
        <Numberelector />
      </div>
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
