import styled from "styled-components";

const ButtonStyled = styled.button`
  border-radius: ${(props) => props.theme.borderRadius.big};
  height: 2.5rem;
  width: 100%;
  border: 2px solid transparent;
  background-color: ${(props) => props.theme.colors.primary.base};
  color: ${(props) => props.theme.colors.ink.dark};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: 1rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary.dark};
  }

  &:disabled {
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.colors.primary.base};
    color: ${(props) => props.theme.colors.primary.base};
    cursor: auto;
  }
`;

export default ButtonStyled;
