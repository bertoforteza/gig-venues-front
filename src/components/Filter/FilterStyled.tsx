import styled from "styled-components";

const FilterStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  color: ${(props) => props.theme.colors.primary.base};
  font-size: 0.875rem;
  font-weight: ${(props) => props.theme.fontWeights.regular};
  margin-bottom: 1.5rem;

  .filter-select {
    background-color: ${(props) => props.theme.colors.ink.light};
    color: ${(props) => props.theme.colors.ink.dark};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    border: 2px solid transparent;
    border-radius: ${(props) => props.theme.borderRadius.big};
    padding: 0.5rem 1rem;
    max-width: 600px;

    &:focus {
      border: 2px solid ${(props) => props.theme.colors.primary.base};
    }
  }

  .filter-label {
    margin-left: 17px;
  }
`;

export default FilterStyled;
