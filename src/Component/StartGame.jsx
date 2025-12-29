import React from "react";
import styled from "styled-components";
export const StartGame = ({toggle}) => {
  return (
    <Container>
      <div className="">
        <img className="image" src="public\dices 1.png" alt="" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle} >Play now</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  max-width: 1180px;
  justify-content: space-between;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }











  /* for small screen laptop  */

  @media screen and (max-width: 1400px) {
    display: flex;
    /* flex-direction: column; */
    .image {
      height: 400px;
    }
    
  .content {
    h1 {
      font-size: 50px;
      white-space: nowrap;
    }
  }




  /* for phone  */
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    .image {
      height: 400px;
    }
  }
`;

const Button = styled.button`
  color: white;
  background-color: black;
  border-radius: 5px;
  padding: 10px 18px;
  width: 220px;
  border: 1px solid transparent;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
    border: 1px solid black;
    color: black;
    transition: 0.8s ease-in;
  }
`;
