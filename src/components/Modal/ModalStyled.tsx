import styled from "styled-components";

const ModalStyled = styled.div`
  position: fixed;
  width: 17.18rem;
  height: 17.18rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  padding: 0.5rem 1.5rem;

  .modal-heading {
    color: ${(props) => props.theme.colors.ink.dark};
    font-size: 1.25rem;
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
  }

  .modal-text {
    color: ${(props) => props.theme.colors.ink.dark};
    font-size: 1.125rem;
    font-weight: ${(props) => props.theme.fontWeights.regular};
  }

  &.modal-error {
    background-color: ${(props) => props.theme.colors.error.base};
  }
  &.modal-success {
    background-color: ${(props) => props.theme.colors.success.base};
  }
`;

export default ModalStyled;
