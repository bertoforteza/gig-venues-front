import styled from "styled-components";

const MobileMenuStyled = styled.div`
  .mobile-menu-conteiner {
    position: fixed;
    bottom: 0;
    height: 3.25rem;
    width: 100vw;
    background-color: ${(props) => props.theme.colors.ink.dark};
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid ${(props) => props.theme.colors.ink.gray};
  }
  .user-menu {
    position: fixed;
    right: 0;
    bottom: 3.25rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-color: ${(props) => props.theme.colors.ink.dark};

    & a {
      text-decoration: none;
      font-weight: ${(props) => props.theme.fontWeights.semiBold};
      color: ${(props) => props.theme.colors.ink.light};
      border-top: 1px solid ${(props) => props.theme.colors.ink.gray};
      border-left: 1px solid ${(props) => props.theme.colors.ink.gray};
      padding: 0.6rem;
      width: 30vw;
      text-align: right;
      font-size: 1rem;
    }
  }
`;

export default MobileMenuStyled;
