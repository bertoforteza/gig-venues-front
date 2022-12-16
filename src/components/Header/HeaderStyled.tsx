import styled from "styled-components";

const HeaderStyled = styled.header`
  padding: 0 2rem;
  height: 2.625rem;
  background-color: ${(props) => props.theme.colors.ink.dark};
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  .header-logo__small {
    display: block;
  }

  .header-logo__large {
    display: none;
  }

  @media (min-width: 800px) {
    height: 6rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.ink.gray};

    .header-logo__small {
      display: none;
    }

    .header-logo__large {
      display: block;
    }
  }
`;

export default HeaderStyled;
