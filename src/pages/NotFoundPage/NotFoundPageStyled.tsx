import styled from "styled-components";

const NotFoundPageStyled = styled.main`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-bottom: 4rem;

  .not-found-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .not-found-code {
    color: ${(props) => props.theme.colors.primary.base};
    font-size: 1.625rem;
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
    margin-top: 1.5rem;
  }

  .not-found-text {
    color: ${(props) => props.theme.colors.ink.light};
    font-size: 1.25rem;
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
    margin-top: 1rem;
  }

  .button {
    width: 10rem;
    margin-top: 3rem;
  }
`;

export default NotFoundPageStyled;
