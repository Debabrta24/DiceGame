import styled from "styled-components";
export const Numberelector = ({
  error,
  setError,
  selectedNumber,
  setelectedNumber,
}) => {
  const arryNumber = [1, 2, 3, 4, 5, 6];
  //   console.log(selectedNumber);

  const numberSelectorHandeler = (value) => {
    setelectedNumber(value);
    setError("");
  };
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arryNumber.map((value, i) => (
          <Box
            isSelected={value == selectedNumber}
            key={i}
            onClick={() => numberSelectorHandeler(value)}
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
  .error {
    color: red;
  }
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
