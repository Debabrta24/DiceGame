import styled from "styled-components";
export const Button = styled.button`
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
